import { and, eq, sql } from "drizzle-orm";
import { db } from "../db.config.js";
import {
  NewNote,
  NewNoteVersion,
  Note,
  notes,
  NoteVersion,
  noteVersions,
} from "../schema/index.js";

export class NoteRepositories {
  async create(noteData: NewNote): Promise<Note | null> {
    const [note] = await db.insert(notes).values(noteData).returning();
    return note;
  }
  

  async findById(noteId: string): Promise<Note> {
    const [note] = await db
      .select()
      .from(notes)
      .where(and(eq(notes.id, noteId), eq(notes.isDeleted, false)));
    return note;
  }

  async findByOwnerId(userId: string): Promise<Note[]> {
    const ownerNotes = await db
      .select()
      .from(notes)
      .where(and(eq(notes.ownerId, userId), eq(notes.isDeleted, false)));
    return ownerNotes;
  }

  async findByName(title: string): Promise<Note | null> {
    const [note] = await db
      .select()
      .from(notes)
      .where(and(eq(notes.title, title), eq(notes.isDeleted, false)));
    return note || null;
  }

  async findAll(noteId: string): Promise<Note[]> {
    const allNotes = await db
      .select()
      .from(notes)
      .where(and(eq(notes.id, noteId), eq(notes.isDeleted, false)));
    return allNotes || null;
  }

  async softDelete(noteId: string): Promise<Note> {
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

  async update(noteId: string, noteData: NewNote | null): Promise<Note> {
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
  async createversion(noteData: NewNoteVersion): Promise<NoteVersion | null> {
    const [version] = await db
      .insert(noteVersions)
      .values(noteData)
      .returning();
    return version;
  }

  async incrementVersion(noteId: string): Promise<number> {
    const [result] = await db
      .update(notes)
      .set({
        currentVersion: sql`${notes.currentVersion} + 1`,
        updatedAt: new Date(),
      })
      .where(eq(notes.id, noteId))
      .returning({ version: notes.currentVersion });

    return result?.version || 0;
  }
}
export const noteRepositories = new NoteRepositories();
