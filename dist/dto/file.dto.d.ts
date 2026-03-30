import { z } from "zod";
export declare const fileMetadataSchema: z.ZodObject<{
    filename: z.ZodString;
    mimeType: z.ZodString;
    size: z.ZodNumber;
}, z.core.$strip>;
export type FileMetadataDto = z.infer<typeof fileMetadataSchema>;
//# sourceMappingURL=file.dto.d.ts.map