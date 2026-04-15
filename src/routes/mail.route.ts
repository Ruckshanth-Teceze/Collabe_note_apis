import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { mailController } from "../controllers/mail.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { emailSchema } from "../dto/mail.dto.js";

const mailRouter = new OpenAPIHono();
mailRouter.use("*", authMiddleware);

mailRouter.openapi(
  createRoute({
    method: "post",
    path: "/",
    tags: ["Mail"],
    summary: "Send a mail via n8n",
    description: "Triggers the n8n webhook to send an email",
    security: [{ bearerAuth: [] }],
    request: {
      body: {
        content: {
          "application/json": {
            schema: emailSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: "Mail triggered successfully",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: z.any(),
            }),
          },
        },
      },
      400: { description: "Validation error" },
      401: { description: "Unauthorized" },
    },
  }),
  mailController.createMail
);

export default mailRouter;