import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { FileCreateSchema } from "../dto/file.dto.js";
import { fileController } from "../controllers/file.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const fileRouter = new OpenAPIHono();
fileRouter.use("*", authMiddleware);

// 🔹 Create/Upload File
fileRouter.openapi(
  createRoute({
    method: "post",
    path: "/",
    tags: ["Files"],
    summary: "Upload a file",
    description: "Upload a file to a note",
    security: [{ bearerAuth: [] }],
    request: {
      body: {
        content: {
          "multipart/form-data": {
            schema: FileCreateSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "File uploaded successfully",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: z.object({
                id: z.string(),
                filename: z.string(),
                mimeType: z.string(),
                size: z.number(),
                noteId: z.string(),
                storageKey: z.string(),
                uploadedBy: z.string(),
                createdAt: z.string(),
              }),
            }),
          },
        },
      },
      400: { description: "Validation error" },
      401: { description: "Unauthorized" },
    },
  }),
  fileController.createFile,
);

// 🔹 Get File (presigned URL)
fileRouter.openapi(
  createRoute({
    method: "get",
    path: "/{attachmentId}",
    tags: ["Files"],
    summary: "Get file download URL",
    description: "Get presigned download URL for a file",
    security: [{ bearerAuth: [] }],
    request: {
      params: z.object({
        attachmentId: z.string().uuid("Invalid attachment ID format"),
      }),
    },
    responses: {
      200: {
        description: "File URL retrieved successfully",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: z.string(),
            }),
          },
        },
      },
      400: { description: "Validation error" },
      401: { description: "Unauthorized" },
      404: { description: "File not found" },
    },
  }),
  fileController.getFile,
);

// 🔹 Get all files for a note
fileRouter.openapi(
  createRoute({
    method: "get",
    path: "/note/{noteId}",
    tags: ["Files"],
    summary: "Get files by note ID",
    description: "Get all files attached to a note",
    security: [{ bearerAuth: [] }],
    request: {
      params: z.object({
        noteId: z.string().uuid("Invalid note ID format"),
      }),
    },
    responses: {
      200: {
        description: "Files retrieved successfully",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: z.array(
                z.object({
                  id: z.string(),
                  filename: z.string(),
                  mimeType: z.string(),
                  size: z.number(),
                  noteId: z.string(),
                  storageKey: z.string(),
                  uploadedBy: z.string(),
                  createdAt: z.string(),
                }),
              ),
            }),
          },
        },
      },
      400: { description: "Validation error" },
      401: { description: "Unauthorized" },
    },
  }),
  fileController.getFilesByNoteId,
);

// 🔹 Delete File
fileRouter.openapi(
  createRoute({
    method: "delete",
    path: "/{attachmentId}",
    tags: ["Files"],
    summary: "Delete a file",
    description: "Delete a file attachment",
    security: [{ bearerAuth: [] }],
    request: {
      params: z.object({
        attachmentId: z.string().uuid("Invalid attachment ID format"),
      }),
    },
    responses: {
      200: {
        description: "File deleted successfully",
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
      400: { description: "Validation error" },
      401: { description: "Unauthorized" },
      404: { description: "File not found" },
    },
  }),
  fileController.deleteFile,
);

export default fileRouter;
