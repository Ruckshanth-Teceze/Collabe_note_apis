import { randomUUID } from "crypto";
import { fileRepository } from "../repositories/file.repo.js";
import { noteRepositories } from "../repositories/note.repo.js";
import { userRepository } from "../repositories/user.repo.js";
import { BUCKET, s3 } from "../middlewares/file.middleware.js";
import {
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class FileService {
  async attachmentCreate(userId: string, noteId: string, file: File) {
    // Check user permission - either from permissions table or note owner
    const userPermission = await userRepository.getPermission(noteId, userId);
    const note = await noteRepositories.findById(noteId);

    // Allow access if user has permission OR is the note owner
    if (!userPermission && (!note || note.ownerId !== userId)) {
      throw Error("User permission failed - no access to this note");
    }

    // Only OWNER and EDITOR can upload files
    // Note owners always have implicit OWNER permission
    const effectiveRole =
      userPermission?.role || (note?.ownerId === userId ? "OWNER" : null);
    if (!["OWNER", "EDITOR"].includes(effectiveRole!)) {
      throw Error(
        "Insufficient permissions - only owners and editors can upload files",
      );
    }

    // Validate file
    if (!file || !(file instanceof File)) {
      throw Error("Invalid file");
    }

    if (file.size === 0) {
      throw Error("File is empty");
    }

    // Max file size: 100MB
    const MAX_SIZE = 100 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      throw Error("File size exceeds maximum allowed size of 100MB");
    }

    // Generate unique storage key
    const ext = file.name.split(".").pop() || "bin";
    const storageKey = `${noteId}/${randomUUID()}.${ext}`;

    // Read file as buffer
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    // Upload to MinIO
    await s3.send(
      new PutObjectCommand({
        Bucket: BUCKET,
        Key: storageKey,
        Body: fileBuffer,
        ContentType: file.type,
        Metadata: {
          uploadedBy: userId,
          originalName: file.name,
        },
      }),
    );

    // Create database record
    const attachmentData = {
      noteId: noteId,
      filename: file.name,
      mimeType: file.type,
      storageKey: storageKey,
      size: file.size,
      uploadedBy: userId,
    };

    const attachment = await fileRepository.createAttachment(attachmentData);
    if (!attachment) {
      throw Error("File creation failed");
    }

    return {
      id: attachment.id,
      filename: attachment.filename,
      mimeType: attachment.mimeType,
      size: attachment.size,
      noteId: attachment.noteId,
      storageKey: attachment.storageKey,
      uploadedBy: attachment.uploadedBy,
      createdAt: attachment.createdAt.toISOString(),
    };
  }

  async getPresignedUrl(userId: string, attachmentId: string) {
    // Get attachment
    const attachment = await fileRepository.getAttachmentById(attachmentId);
    if (!attachment) {
      throw Error("File not found");
    }

    // Check user permission for the note
    const userPermission = await userRepository.getPermission(
      attachment.noteId,
      userId,
    );
    if (!userPermission) {
      throw Error(
        "Access denied - you don't have permission to access this file",
      );
    }

    // Generate presigned URL (expires in 1 hour)
    const command = new GetObjectCommand({
      Bucket: BUCKET,
      Key: attachment.storageKey,
    });

    const url = await getSignedUrl(s3, command);
    return url;
  }

  async getFilesByNoteId(userId: string, noteId: string) {
    // Check user permission - either from permissions table or note owner
    const userPermission = await userRepository.getPermission(noteId, userId);
    const note = await noteRepositories.findById(noteId);

    // Allow access if user has permission OR is the note owner
    if (!userPermission && (!note || note.ownerId !== userId)) {
      throw Error(
        "Access denied - you don't have permission to view files for this note",
      );
    }

    // Get all attachments for the note
    const attachments = await fileRepository.getAttachmentsByNoteId(noteId);

    // Generate presigned URL for each attachment
    const filesWithUrls = await Promise.all(
      attachments.map(async (attachment) => {
        const command = new GetObjectCommand({
          Bucket: BUCKET,
          Key: attachment.storageKey,
        });
        const url = await getSignedUrl(s3, command);
        return {
          attachmentId: attachment.id,
          filename: attachment.filename,
          url: url,
        };
      }),
    );

    return filesWithUrls;
  }

  async deleteFile(userId: string, attachmentId: string) {
    // Get attachment
    const attachment = await fileRepository.getAttachmentById(attachmentId);
    if (!attachment) {
      throw Error("File not found");
    }

    // Check user permission
    const userPermission = await userRepository.getPermission(
      attachment.noteId,
      userId,
    );
    if (!userPermission) {
      throw Error(
        "Access denied - you don't have permission to delete this file",
      );
    }

    // Only OWNER and EDITOR can delete files
    if (!["OWNER", "EDITOR"].includes(userPermission.role)) {
      throw Error(
        "Insufficient permissions - only owners and editors can delete files",
      );
    }

    // Delete from MinIO
    await s3.send(
      new DeleteObjectCommand({
        Bucket: BUCKET,
        Key: attachment.storageKey,
      }),
    );

    // Delete from database
    await fileRepository.deleteAttachment(attachmentId);

    return {
      message: "File deleted successfully",
      deletedId: attachmentId,
    };
  }
}

export const fileService = new FileService();
