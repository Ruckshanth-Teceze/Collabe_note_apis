import { fileRepository } from "../repositories/file.repo.js";
import { userRepository } from "../repositories/user.repo.js";

export class FileService {
  async attachmentCreate(userId: string, noteId: string, file: File) {
    const userPermission = await userRepository.getPermission(noteId, userId);
    const attachmentData = {
      noteId: noteId,
      filename: file.name,
      mimeType: file.type,
      size: file.size,
      s3Key: "2311",
      s3Bucket: "wwdwwd213293",
      uploadedBy: userPermission?.role || "",
    };

    const attachment = await fileRepository.createAttachment(attachmentData);
    if (!attachment) {
      throw Error("User permission failed");
    }

    // return {
    //   ...note,
    //   userRole: userPermission.role,
    // };
  }
}

export const fileService = new FileService();
