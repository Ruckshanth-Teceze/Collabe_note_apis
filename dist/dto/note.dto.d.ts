import z from "zod";
export declare const shareNoteSchema: z.ZodObject<{
    userId: z.ZodString;
    noteId: z.ZodString;
}, z.z.core.$strip>;
export declare const createNoteSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, z.z.core.$strip>;
export declare const updateNoteSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const noteSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    content: z.ZodString;
    userId: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export declare const IdParamSchema: z.ZodObject<{
    id: z.ZodString;
}, z.z.core.$strip>;
export type createNoteDto = z.infer<typeof createNoteSchema>;
export type updateNoteDto = z.infer<typeof updateNoteSchema>;
//# sourceMappingURL=note.dto.d.ts.map