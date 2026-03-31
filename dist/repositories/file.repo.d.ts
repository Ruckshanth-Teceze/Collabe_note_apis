import { NewAttachment, Attachment } from "../schema/index.js";
export declare class FileRepository {
    createAttachment(attachmentData: NewAttachment): Promise<Attachment>;
    getAttachmentById(id: string): Promise<Attachment | undefined>;
    getAttachmentsByNoteId(noteId: string): Promise<Attachment[]>;
    deleteAttachment(id: string): Promise<void>;
}
export declare const fileRepository: FileRepository;
//# sourceMappingURL=file.repo.d.ts.map