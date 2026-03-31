import { FileCreateSchema } from "../dto/file.dto.js";
import { ZodError } from "zod";
import { fileService } from "../services/file.service.js";
export class FileController {
    async createFile(c) {
        try {
            const userId = await c.get("userId");
            const fileData = await c.req.formData();
            const noteId = fileData.get("noteId");
            const fileMetaData = fileData.get("fileMetaData");
            if (!noteId || typeof noteId !== "string") {
                return c.json({ success: false, message: "noteId is required" }, 400);
            }
            if (!fileMetaData) {
                return c.json({ success: false, message: "fileMetaData is required" }, 400);
            }
            const arrayBuffer = await fileMetaData.arrayBuffer();
            const fileBuffer = Buffer.from(arrayBuffer);
            const validateFile = FileCreateSchema.parse({ noteId, fileMetaData });
            const result = await fileService.attachmentCreate(userId ?? "", validateFile.noteId, validateFile.fileMetaData, fileBuffer);
            return c.json({ success: true, result }, 201);
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log("ZodError:", error.issues);
                return c.json({ success: false, message: error.message }, 400);
            }
            if (error instanceof Error) {
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
}
export const fileController = new FileController();
//# sourceMappingURL=file.controller.js.map