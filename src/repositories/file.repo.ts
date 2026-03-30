import { db } from "../db.config.js";
import { attachments, NewAttachment, Attachment } from "../schema/index.js";
import { eq } from "drizzle-orm";

export class FileRepository {
  async createAttachment(attachmentData: NewAttachment): Promise<Attachment> {
    const [attachment] = await db
      .insert(attachments)
      .values(attachmentData)
      .returning();
    return attachment;
  }

  async getAttachmentById(id: string): Promise<Attachment | undefined> {
    const [attachment] = await db
      .select()
      .from(attachments)
      .where(eq(attachments.id, id));
    return attachment;
  }

  async getAttachmentsByNoteId(noteId: string): Promise<Attachment[]> {
    return await db
      .select()
      .from(attachments)
      .where(eq(attachments.noteId, noteId));
  }

  async deleteAttachment(id: string): Promise<void> {
    await db.delete(attachments).where(eq(attachments.id, id));
  }
}

export const fileRepository = new FileRepository();
