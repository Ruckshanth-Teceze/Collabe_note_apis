import z from "zod";
import { fileMetadataSchema } from "./file.dto.js";
export const createNoteSchema = z.object({
    title: z.string().max(500).default("Untitled"),
    content: z.string().optional(),
    fileMetadata: fileMetadataSchema.optional(),
});
export const updateNoteSchema = z.object({
    title: z.string().max(500).default("Untitled"),
    content: z.string().optional(),
});
export const noteSchema = z.object({
    id: z.string().uuid().openapi({
        example: "550e8400-e29b-41d4-a716-446655440000",
        description: "Unique note identifier",
    }),
    title: z.string().min(1).max(200).openapi({
        example: "My Important Note",
        description: "Note title",
    }),
    content: z.string().min(1).openapi({
        example: "This is the note content...",
        description: "Note body content",
    }),
    userId: z.string().uuid().openapi({
        description: "Owner user ID",
    }),
    createdAt: z.string().datetime().openapi({
        example: "2024-01-01T12:00:00.000Z",
        description: "Creation timestamp",
    }),
    updatedAt: z.string().datetime().optional().openapi({
        description: "Last update timestamp",
    }),
});
export const IdParamSchema = z.object({
    id: z.string().uuid("Invalid UUID format"), // ✅ Enforces UUID v4 format
});
//# sourceMappingURL=note.dto.js.map