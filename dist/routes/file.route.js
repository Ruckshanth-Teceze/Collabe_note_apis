import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { FileCreateSchema, fileSchema } from "../dto/file.dto.js";
import { fileController } from "../controllers/file.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const fileRouter = new OpenAPIHono();
fileRouter.use("*", authMiddleware);
fileRouter.openapi(createRoute({
    method: "post",
    path: "/",
    tags: ["Files"],
    summary: "Create a new file",
    description: "Create a file for the authenticated user",
    security: [{ bearerAuth: [] }], // 🔑 Shows lock icon in Scalar
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
            description: "File created successfully",
            content: {
                "application/json": {
                    schema: z.object({
                        success: z.boolean(),
                        result: fileSchema, // ✅ Reuse your file schema
                    }),
                },
            },
        },
        400: { description: "Validation error" },
        401: { description: "Unauthorized - invalid or missing token" },
    },
}), fileController.createFile);
export default fileRouter;
//# sourceMappingURL=file.route.js.map