export declare class FileService {
    attachmentCreate(userId: string, noteId: string, file: any, fileBuffer: Buffer): Promise<{
        attachment: {
            id: string;
            createdAt: Date;
            noteId: string;
            filename: string;
            mimeType: string;
            storageKey: string;
            size: number;
            uploadedBy: string;
        };
        userRole: "OWNER" | "EDITOR" | "VIEWER";
    }>;
}
export declare const fileService: FileService;
//# sourceMappingURL=file.service.d.ts.map