import { createNoteDto, updateNoteDto } from "../dto/note.dto.js";
export declare class NoteServices {
    noteCreate(userId: string, noteInput: createNoteDto): Promise<{
        userRole: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string | null;
        ownerId: string;
        currentVersion: number;
        isDeleted: boolean;
    }>;
    shareCreate(userId: string, noteId: string): Promise<{
        userRole: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string | null;
        ownerId: string;
        currentVersion: number;
        isDeleted: boolean;
    }>;
    noteUpdate(userId: string, noteId: string, noteInput: updateNoteDto): Promise<{
        userRole: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string | null;
        ownerId: string;
        currentVersion: number;
        isDeleted: boolean;
    }>;
    noteGetById(userId: string, noteId: string): Promise<{
        userRole: "OWNER" | "EDITOR" | "VIEWER";
        files: {
            attachmentId: string;
            filename: string;
            url: string;
        }[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string | null;
        ownerId: string;
        currentVersion: number;
        isDeleted: boolean;
    }>;
    noteGets(userId: string): Promise<{
        attachments: {
            attachmentId: string;
            filename: string;
            url: string;
        }[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        content: string | null;
        ownerId: string;
        currentVersion: number;
        isDeleted: boolean;
    }[]>;
    noteDelete(userId: string, noteId: string): Promise<{
        message: string;
        userRole: "OWNER";
    }>;
}
export declare const noteServices: NoteServices;
//# sourceMappingURL=note.service.d.ts.map