import z from "zod";
export declare const FileCreateSchema: z.ZodObject<{
    noteId: z.ZodString;
    fileMetaData: z.ZodAny;
}, z.z.core.$strip>;
export declare const fileSchema: z.ZodObject<{
    path: z.ZodString;
    fileName: z.ZodString;
    mimeType: z.ZodString;
    size: z.ZodNumber;
}, z.z.core.$strip>;
export type FileCreate = z.infer<typeof FileCreateSchema>;
//# sourceMappingURL=file.dto.d.ts.map