import { Context } from "hono";
import { ZodError } from "zod";
import { noteServices } from "../services/note.service.js";
import {
  createNoteSchema,
  shareNoteSchema,
  updateNoteSchema,
} from "../dto/note.dto.js";

export class NoteController {
  async createNote(c: Context) {
    try {
      const userId = await c.get("userId");
      const noteInput = await c.req.json();

      const validateNote = createNoteSchema.parse(noteInput);

      const result = await noteServices.noteCreate(userId || "", validateNote);

      return c.json({ success: true, result }, 201);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log("ZodError:", error.issues);
        return c.json({ success: false, message: error.message }, 400);
      }
      if (error instanceof Error) {
        return c.json({ success: false, message: error.message }, 400);
      }
      return c.json({ success: false, message: "Internal server error" }, 500);
    }
  }

  async shareNote(c: Context) {
    try {
      const shareNote = await c.req.json();
      const validateShareNote = shareNoteSchema.parse(shareNote);

      const result = await noteServices.shareCreate(
        validateShareNote.userId ?? "",
        validateShareNote.noteId ?? "",
      );

      return c.json({ success: true, result }, 201);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log("ZodError:", error.issues);
        return c.json({ success: false, message: error.message }, 400);
      }
      if (error instanceof Error) {
        return c.json({ success: false, message: error.message }, 400);
      }
      return c.json({ success: false, message: "Internal server error" }, 500);
    }
  }

  async updateNote(c: Context) {
    try {
      const userId = await c.get("userId");
      const noteId = await c.req.param("id");
      const noteData = await c.req.json();
      const validateNote = updateNoteSchema.parse(noteData);
      const result = await noteServices.noteUpdate(
        userId,
        noteId ?? "",
        validateNote,
      );

      return c.json({ success: true, result }, 200);
    } catch (error) {
      if (error instanceof ZodError) {
        return c.json({ success: false, message: error.issues }, 400);
      }
      if (error instanceof Error) {
        return c.json({ success: false, message: error.message }, 400);
      }
      return c.json({ success: false, message: "Internal server error" }, 500);
    }
  }

  async deleteNote(c: Context) {
    try {
      const userId = await c.get("userId");
      const noteId = await c.req.param("id");
      const result = await noteServices.noteDelete(userId ?? "", noteId ?? "");

      return c.json({ success: true, result }, 200);
    } catch (error) {
      if (error instanceof ZodError) {
        return c.json({ success: false, message: error.issues }, 400);
      }
      if (error instanceof Error) {
        return c.json({ success: false, message: error.message }, 400);
      }
      return c.json({ success: false, message: "Internal server error" }, 500);
    }
  }

  async getNotes(c: Context) {
    try {
      const userId = await c.get("userId");
      const result = await noteServices.noteGets(userId ?? "");

      return c.json({ success: true, result }, 200);
    } catch (error) {
      if (error instanceof ZodError) {
        return c.json({ success: false, message: error.issues }, 400);
      }
      if (error instanceof Error) {
        return c.json({ success: false, message: error.message }, 400);
      }
      return c.json({ success: false, message: "Internal server error" }, 500);
    }
  }

  async getNoteById(c: Context) {
    try {
      const userId = await c.get("userId");
      const noteId = await c.req.param("id");
      const result = await noteServices.noteGetById(userId ?? "", noteId ?? "");

      return c.json({ success: true, result }, 200);
    } catch (error) {
      if (error instanceof ZodError) {
        return c.json({ success: false, message: error.issues }, 400);
      }
      if (error instanceof Error) {
        return c.json({ success: false, message: error.message }, 400);
      }
      return c.json({ success: false, message: "Internal server error" }, 500);
    }
  }
}
export const noteController = new NoteController();
