import z from "zod";

export const FileCreateSchema = z.object({
  noteId: z.string().uuid("Invalid Note ID format"),
  fileMetaData: z.any(),
});

export const fileSchema = z.object({
  path: z.string().min(1).max(255),
  fileName: z.string().min(1).max(255),
  mimeType: z.string(),
  size: z.number(),
});
export type FileCreate = z.infer<typeof FileCreateSchema>;
