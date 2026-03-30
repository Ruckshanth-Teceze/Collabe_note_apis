import { NewNote, NewNoteVersion, Note, NoteVersion } from "../schema/index.js";
export declare class NoteRepositories {
    create(noteData: NewNote): Promise<Note | null>;
    findById(noteId: string): Promise<Note>;
    findByOwnerId(userId: string): Promise<Note[]>;
    findByName(title: string): Promise<Note | null>;
    findAll(noteId: string): Promise<Note[]>;
    softDelete(noteId: string): Promise<Note>;
    update(noteId: string, noteData: NewNote | null): Promise<Note>;
    createversion(noteData: NewNoteVersion): Promise<NoteVersion | null>;
    incrementVersion(noteId: string): Promise<number>;
}
export declare const noteRepositories: NoteRepositories;
//# sourceMappingURL=note.repo.d.ts.map