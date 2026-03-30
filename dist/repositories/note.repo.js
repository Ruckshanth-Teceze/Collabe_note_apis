import { and, eq, sql } from "drizzle-orm";
import { db } from "../db.config.js";
import { notes, noteVersions, } from "../schema/index.js";
export class NoteRepositories {
    async create(noteData) {
        const [note] = await db.insert(notes).values(noteData).returning();
        return note;
    }
    async findById(noteId) {
        const [note] = await db
            .select()
            .from(notes)
            .where(and(eq(notes.id, noteId), eq(notes.isDeleted, false)));
        return note;
    }
    async findByOwnerId(userId) {
        const ownerNotes = await db
            .select()
            .from(notes)
            .where(and(eq(notes.ownerId, userId), eq(notes.isDeleted, false)));
        return ownerNotes;
    }
    async findByName(title) {
        const [note] = await db
            .select()
            .from(notes)
            .where(and(eq(notes.title, title), eq(notes.isDeleted, false)));
        return note || null;
    }
    async findAll(noteId) {
        const allNotes = await db
            .select()
            .from(notes)
            .where(and(eq(notes.id, noteId), eq(notes.isDeleted, false)));
        return allNotes || null;
    }
    async softDelete(noteId) {
        const [note] = await db
            .update(notes)
            .set({
            isDeleted: true,
            updatedAt: new Date(),
        })
            .where(eq(notes.id, noteId))
            .returning();
        return note;
    }
    async update(noteId, noteData) {
        const [note] = await db
            .update(notes)
            .set({
            ...noteData,
            updatedAt: new Date(),
        })
            .where(eq(notes.id, noteId))
            .returning();
        return note;
    }
    //note version crud
    async createversion(noteData) {
        const [version] = await db
            .insert(noteVersions)
            .values(noteData)
            .returning();
        return version;
    }
    async incrementVersion(noteId) {
        const [result] = await db
            .update(notes)
            .set({
            currentVersion: sql `${notes.currentVersion} + 1`,
            updatedAt: new Date(),
        })
            .where(eq(notes.id, noteId))
            .returning({ version: notes.currentVersion });
        return result?.version || 0;
    }
}
export const noteRepositories = new NoteRepositories();
//# sourceMappingURL=note.repo.js.map