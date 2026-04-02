import { ZodError } from "zod";
import { fileService } from "../services/file.service.js";
export class FileController {
    async createFile(c) {
        try {
            const userId = await c.get("userId");
            const formData = await c.req.formData();
            const noteId = formData.get("noteId");
            const file = formData.get("file");
            if (!noteId) {
                return c.json({ success: false, message: "noteId is required" }, 400);
            }
            if (!file || !(file instanceof File)) {
                return c.json({ success: false, message: "file is required" }, 400);
            }
            // Validate noteId format
            const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            if (!uuidRegex.test(noteId)) {
                return c.json({ success: false, message: "Invalid noteId format" }, 400);
            }
            // Validate file
            if (file.size === 0) {
                return c.json({ success: false, message: "File is empty" }, 400);
            }
            const result = await fileService.attachmentCreate(userId || "", noteId, file);
            return c.json({ success: true, result }, 201);
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log("ZodError:", error.issues);
                return c.json({ success: false, message: error.message }, 400);
            }
            if (error instanceof Error) {
                console.log("Error:", error.message);
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
    async getFile(c) {
        try {
            const userId = await c.get("userId");
            const attachmentId = c.req.param("attachmentId");
            if (!attachmentId) {
                return c.json({ success: false, message: "attachmentId is required" }, 400);
            }
            const result = await fileService.getPresignedUrl(userId || "", attachmentId);
            return c.json({ success: true, result }, 200);
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log("ZodError:", error.issues);
                return c.json({ success: false, message: error.message }, 400);
            }
            if (error instanceof Error) {
                console.log("Error:", error.message);
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
    async getFilesByNoteId(c) {
        try {
            const userId = await c.get("userId");
            const noteId = c.req.param("noteId");
            if (!noteId) {
                return c.json({ success: false, message: "noteId is required" }, 400);
            }
            const result = await fileService.getFilesByNoteId(userId || "", noteId);
            return c.json({ success: true, result }, 200);
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log("ZodError:", error.issues);
                return c.json({ success: false, message: error.message }, 400);
            }
            if (error instanceof Error) {
                console.log("Error:", error.message);
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
    async deleteFile(c) {
        try {
            const userId = await c.get("userId");
            const attachmentId = c.req.param("attachmentId");
            if (!attachmentId) {
                return c.json({ success: false, message: "attachmentId is required" }, 400);
            }
            const result = await fileService.deleteFile(userId || "", attachmentId);
            return c.json({ success: true, result }, 200);
        }
        catch (error) {
            if (error instanceof ZodError) {
                console.log("ZodError:", error.issues);
                return c.json({ success: false, message: error.message }, 400);
            }
            if (error instanceof Error) {
                console.log("Error:", error.message);
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
}
export const fileController = new FileController();
//# sourceMappingURL=file.controller.js.map