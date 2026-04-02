export declare class FileService {
    attachmentCreate(userId: string, noteId: string, file: File): Promise<{
        id: string;
        filename: string;
        mimeType: string;
        size: number;
        noteId: string;
        storageKey: string;
        uploadedBy: string;
        createdAt: string;
    }>;
    getPresignedUrl(userId: string, attachmentId: string): Promise<string>;
    getFilesByNoteId(userId: string, noteId: string): Promise<{
        attachmentId: string;
        filename: string;
        url: string;
    }[]>;
    deleteFile(userId: string, attachmentId: string): Promise<{
        message: string;
        deletedId: string;
    }>;
}
export declare const fileService: FileService;
//# sourceMappingURL=file.service.d.ts.map