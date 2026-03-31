import { randomUUID } from "crypto";
import { fileRepository } from "../repositories/file.repo.js";
import { userRepository } from "../repositories/user.repo.js";
import { BUCKET, s3 } from "../middlewares/file.middleware.js";
import { PutObjectCommand } from "@aws-sdk/client-s3";
export class FileService {
    async attachmentCreate(userId, noteId, file, fileBuffer) {
        const userPermission = await userRepository.getPermission(noteId, userId);
        if (!userPermission) {
            throw Error("User permission failed");
        }
        const ext = file.name.split(".").pop();
        const key = `${noteId}/${randomUUID()}.${ext}`;
        const attachmentData = {
            noteId: noteId,
            filename: file.name,
            mimeType: file.type,
            size: file.size,
            uploadedBy: userPermission?.userId || "",
            storageKey: key,
        };
        await s3.send(new PutObjectCommand({
            Bucket: BUCKET,
            Key: key,
            Body: fileBuffer,
            ContentType: attachmentData.mimeType,
            Metadata: {
                uploadedBy: userId,
                originalName: attachmentData.filename,
            },
        }));
        const attachment = await fileRepository.createAttachment(attachmentData);
        if (!attachment) {
            throw Error("File creation failed");
        }
        return {
            attachment,
            userRole: userPermission?.role,
        };
    }
}
export const fileService = new FileService();
//# sourceMappingURL=file.service.js.map