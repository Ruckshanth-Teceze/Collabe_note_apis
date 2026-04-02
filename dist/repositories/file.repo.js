import { db } from "../db.config.js";
import { attachments } from "../schema/index.js";
import { eq } from "drizzle-orm";
export class FileRepository {
    async createAttachment(attachmentData) {
        const [attachment] = await db
            .insert(attachments)
            .values(attachmentData)
            .returning();
        return attachment;
    }
    async getAttachmentById(id) {
        const [attachment] = await db
            .select()
            .from(attachments)
            .where(eq(attachments.id, id));
        return attachment;
    }
    async getAttachmentsByNoteId(noteId) {
        return await db
            .select()
            .from(attachments)
            .where(eq(attachments.noteId, noteId));
    }
    async deleteAttachment(id) {
        await db.delete(attachments).where(eq(attachments.id, id));
    }
}
export const fileRepository = new FileRepository();
//# sourceMappingURL=file.repo.js.map