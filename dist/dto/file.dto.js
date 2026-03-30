import { z } from "zod";
export const fileMetadataSchema = z.object({
    filename: z.string().min(1, "Filename required"),
    mimeType: z.string().min(1, "MIME type required"),
    size: z.number().min(1, "File size must be positive"),
});
//# sourceMappingURL=file.dto.js.map