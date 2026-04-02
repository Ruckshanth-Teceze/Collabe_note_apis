// src/routes/note.route.ts
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { noteController } from "../controllers/note.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

import {
  createNoteSchema,
  IdParamSchema,
  noteSchema,
  shareNoteSchema,
  updateNoteSchema,
} from "../dto/note.dto.js";

const noteRouter = new OpenAPIHono();
noteRouter.use("*", authMiddleware);

// 🔹 Create Note
noteRouter.openapi(
  createRoute({
    method: "post",
    path: "/",
    tags: ["Notes"],
    summary: "Create a new note",
    description: "Create a note for the authenticated user",
    security: [{ bearerAuth: [] }], // 🔑 Shows lock icon in Scalar
    request: {
      body: {
        content: {
          "application/json": {
            schema: createNoteSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Note created successfully",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: noteSchema, // ✅ Reuse your note schema
            }),
          },
        },
      },
      400: { description: "Validation error" },
      401: { description: "Unauthorized - invalid or missing token" },
    },
  }),
  noteController.createNote,
);

// 🔹 share Note
noteRouter.openapi(
  createRoute({
    method: "post",
    path: "/share",
    tags: ["Notes"],
    summary: "Share a new note",
    description: "Share a note for the authenticated user",
    security: [{ bearerAuth: [] }], // 🔑 Shows lock icon in Scalar
    request: {
      body: {
        content: {
          "application/json": {
            schema: shareNoteSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Note shared successfully",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: noteSchema, // ✅ Reuse your note schema
            }),
          },
        },
      },
      400: { description: "Validation error" },
      401: { description: "Unauthorized - invalid or missing token" },
    },
  }),
  noteController.shareNote,
);

// 🔹 Get All Notes
noteRouter.openapi(
  createRoute({
    method: "get",
    path: "/",
    tags: ["Notes"],
    summary: "Get all notes for user",
    security: [{ bearerAuth: [] }],
    responses: {
      200: {
        description: "List of user notes",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: z.array(noteSchema),
            }),
          },
        },
      },
      401: { description: "Unauthorized" },
    },
  }),
  noteController.getNotes,
);

// 🔹 Get Note by ID
noteRouter.openapi(
  createRoute({
    method: "get",
    path: "/{id}",
    tags: ["Notes"],
    summary: "Get a specific note by ID",
    security: [{ bearerAuth: [] }],
    request: {
      params: IdParamSchema,
    },
    responses: {
      200: {
        description: "Note details",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: noteSchema,
            }),
          },
        },
      },
      401: { description: "Unauthorized" },
      404: { description: "Note not found" },
    },
  }),
  noteController.getNoteById,
);

// 🔹 Update Note
noteRouter.openapi(
  createRoute({
    method: "put",
    path: "/{id}",
    tags: ["Notes"],
    summary: "Update an existing note",
    security: [{ bearerAuth: [] }],
    request: {
      params: IdParamSchema,
      body: {
        content: {
          "application/json": {
            schema: updateNoteSchema,
          },
        },
      },
    },
    responses: {
      200: {
        description: "Note updated successfully",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: noteSchema,
            }),
          },
        },
      },
      400: { description: "Validation error" },
      401: { description: "Unauthorized" },
      404: { description: "Note not found" },
    },
  }),
  noteController.updateNote,
);

// 🔹 Delete Note
noteRouter.openapi(
  createRoute({
    method: "delete",
    path: "/{id}",
    tags: ["Notes"],
    summary: "Delete a note",
    security: [{ bearerAuth: [] }],
    request: {
      params: IdParamSchema,
    },
    responses: {
      200: {
        description: "Note deleted successfully",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: z.object({
                message: z.string(),
                deletedId: z.string(),
              }),
            }),
          },
        },
      },
      401: { description: "Unauthorized" },
      404: { description: "Note not found" },
    },
  }),
  noteController.deleteNote,
);

export default noteRouter;
