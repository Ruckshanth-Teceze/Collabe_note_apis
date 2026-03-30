import { db } from "../db.config.js";
import { attachments } from "../schema/index.js";
export class FileRepository {
    async createAttachment(attachmentData) {
        const [attachment] = await db
            .insert(attachments)
            .values(attachmentData)
            .returning();
        return attachment;
    }
}
export const fileRepository = new FileRepository();
//# sourceMappingURL=file.repo.js.map