
import { Context } from "hono";
import { ZodError } from "zod";
import { noteServices } from "../services/note.service.js";
import { createNoteSchema, updateNoteSchema } from "../dto/note.dto.js";

export class NoteController {
  async createNote(c: Context) {
    try {
      const userId = await c.get("userId");
      const formData = await c.req.formData();
      console.log(formData);

      const title = (formData.get("title") as string) || "Untitled";
      const content = (formData.get("content") as string) || undefined;
      const file = formData.get("file") ?? undefined;
      let fileMetadata:
        | { filename: string; mimeType: string; size: number }
        | undefined = undefined;

      // Check if fileMetadata is sent as a separate FormData field (stringified JSON)
      const fileMetadataStr = formData.get("fileMetadata");
      console.log(
        "fileMetadata from FormData:",
        fileMetadataStr,
        typeof fileMetadataStr,
      );

      if (fileMetadataStr) {
        try {
          const parsed = JSON.parse(fileMetadataStr as string);
          console.log("Parsed fileMetadata:", parsed);
          // Validate that the parsed metadata has required string values
          // Use explicit checks to avoid undefined/null values slipping through
          if (
            parsed &&
            parsed !== null &&
            typeof parsed.filename === "string" &&
            parsed.filename.length > 0 &&
            typeof parsed.mimeType === "string" &&
            parsed.mimeType.length > 0 &&
            typeof parsed.size === "number" &&
            parsed.size > 0
          ) {
            fileMetadata = {
              filename: String(parsed.filename).trim(),
              mimeType: String(parsed.mimeType).trim(),
              size: Number(parsed.size),
            };
          } else {
            console.log(
              "fileMetadata validation failed - missing or empty required fields",
              { parsed },
            );
          }
        } catch (e) {
          console.log("JSON parse error:", e);
          // Invalid JSON, try to extract from file object instead
        }
      }

      // If fileMetadata is not set yet, try to extract from the File object
      if (!fileMetadata && file) {
        const f = file as File;
        console.log("File object:", f.name, f.type, f.size);
        // Ensure all values are valid strings/numbers before using them
        if (
          f &&
          f.name &&
          typeof f.name === "string" &&
          f.name.length > 0 &&
          f.type &&
          typeof f.type === "string" &&
          f.type.length > 0 &&
          f.size &&
          typeof f.size === "number" &&
          f.size > 0
        ) {
          fileMetadata = {
            filename: f.name.trim(),
            mimeType: f.type.trim(),
            size: Number(f.size),
          };
        } else {
          console.log(
            "File object validation failed - missing or invalid properties",
            { name: f.name, type: f.type, size: f.size },
          );
        }
      }

      const noteInput: any = { title, content };
      // Only add fileMetadata if all required fields are present and valid
      if (
        fileMetadata &&
        fileMetadata.filename &&
        fileMetadata.mimeType &&
        fileMetadata.size > 0
      ) {
        noteInput.fileMetadata = fileMetadata;
      } else {
        console.log(
          "Skipping fileMetadata - validation failed or fileMetadata is empty",
        );
      }
      console.log("Final noteInput:", noteInput);

      // Final safety check - remove fileMetadata if it has any undefined/null values
      if (noteInput.fileMetadata) {
        const fm = noteInput.fileMetadata;
        if (!fm.filename || !fm.mimeType || typeof fm.size !== "number") {
          console.log("Final check failed - removing invalid fileMetadata", fm);
          delete noteInput.fileMetadata;
        }
      }

      const validateNote = createNoteSchema.parse(noteInput);
      const result = await noteServices.noteCreate(
        userId || "",
        validateNote,
        file,
      );

      return c.json({ success: true, result }, 201);
    } catch (error) {
      if (error instanceof ZodError) {
        console.log("ZodError details:", JSON.stringify(error.issues, null, 2));
        return c.json(
          {
            success: false,
            error: {
              name: "ZodError",
              message: error.message,
              issues: error.issues,
            },
          },
          400,
        );
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
