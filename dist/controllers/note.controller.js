import { ZodError } from "zod";
import { fileMetadataSchema } from "../dto/file.dto.js";
import { noteServices } from "../services/note.service.js";
import { createNoteSchema, updateNoteSchema } from "../dto/note.dto.js";
export class NoteController {
    async createNote(c) {
        try {
            const userId = await c.get("userId");
            const formData = await c.req.formData();
            const title = formData.get("title") || "Untitled";
            const content = formData.get("content") || undefined;
            const file = formData.get("file");
            let fileMetadata = undefined;
            if (file) {
                fileMetadata = fileMetadataSchema.parse({
                    filename: file.name,
                    mimeType: file.type,
                    size: file.size,
                });
            }
            const noteInput = { title, content, fileMetadata };
            if (fileMetadata)
                noteInput.fileMetadata = fileMetadata;
            const validateNote = createNoteSchema.parse(noteInput);
            const result = await noteServices.noteCreate(userId || "", validateNote, file);
            return c.json({ success: true, result }, 201);
        }
        catch (error) {
            if (error instanceof ZodError) {
                return c.json({ success: false, message: error.issues }, 400);
            }
            if (error instanceof Error) {
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
    async updateNote(c) {
        try {
            const userId = await c.get("userId");
            const noteId = await c.req.param("id");
            const noteData = await c.req.json();
            const validateNote = updateNoteSchema.parse(noteData);
            const result = await noteServices.noteUpdate(userId, noteId ?? "", validateNote);
            return c.json({ success: true, result }, 200);
        }
        catch (error) {
            if (error instanceof ZodError) {
                return c.json({ success: false, message: error.issues }, 400);
            }
            if (error instanceof Error) {
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
    async deleteNote(c) {
        try {
            const userId = await c.get("userId");
            const noteId = await c.req.param("id");
            const result = await noteServices.noteDelete(userId ?? "", noteId ?? "");
            return c.json({ success: true, result }, 200);
        }
        catch (error) {
            if (error instanceof ZodError) {
                return c.json({ success: false, message: error.issues }, 400);
            }
            if (error instanceof Error) {
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
    async getNotes(c) {
        try {
            const userId = await c.get("userId");
            const result = await noteServices.noteGets(userId ?? "");
            return c.json({ success: true, result }, 200);
        }
        catch (error) {
            if (error instanceof ZodError) {
                return c.json({ success: false, message: error.issues }, 400);
            }
            if (error instanceof Error) {
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
    async getNoteById(c) {
        try {
            const userId = await c.get("userId");
            const noteId = await c.req.param("id");
            const result = await noteServices.noteGetById(userId ?? "", noteId ?? "");
            return c.json({ success: true, result }, 200);
        }
        catch (error) {
            if (error instanceof ZodError) {
                return c.json({ success: false, message: error.issues }, 400);
            }
            if (error instanceof Error) {
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
}
export const noteController = new NoteController();
//# sourceMappingURL=note.controller.js.map