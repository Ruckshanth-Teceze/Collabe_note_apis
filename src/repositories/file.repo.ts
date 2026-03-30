import { db } from "../db.config.js";
import { Attachment, attachments, NewAttachment } from "../schema/index.js";

export class FileRepository {
  async createAttachment(attachmentData: NewAttachment): Promise<Attachment> {
    const [attachment] = await db
      .insert(attachments)
      .values(attachmentData)
      .returning();
    return attachment;
  }
}
export const fileRepository = new FileRepository();
