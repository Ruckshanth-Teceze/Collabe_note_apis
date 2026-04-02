// src/routes/auth.route.ts
import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { authController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { loginSchema, registerSchema } from "../dto/auth.dto.js";
const authRouter = new OpenAPIHono();
// 🔹 Public: Register
authRouter.openapi(createRoute({
    method: "post",
    path: "/register",
    summary: "Register a new user",
    tags: ["Authentication"],
    request: {
        body: {
            content: { "application/json": { schema: registerSchema } },
        },
    },
    responses: {
        201: {
            description: "User registered",
            content: {
                "application/json": {
                    schema: z.object({
                        success: z.boolean(),
                        user: z.object({
                            id: z.string(),
                            email: z.string(),
                            name: z.string().nullable(),
                        }),
                        token: z.string(),
                    }),
                },
            },
        },
        400: { description: "Validation error" },
    },
}), authController.registerUser);
// 🔹 Public: Login
authRouter.openapi(createRoute({
    method: "post",
    path: "/login",
    tags: ["Authentication"],
    summary: "Login with email and password",
    request: {
        body: {
            content: { "application/json": { schema: loginSchema } },
        },
    },
    responses: {
        200: {
            description: "Login successful",
            content: {
                "application/json": {
                    schema: z.object({
                        success: z.boolean(),
                        user: z.object({
                            id: z.string(),
                            email: z.string(),
                            name: z.string().nullable(),
                        }),
                        token: z.string(),
                    }),
                },
            },
        },
        401: { description: "Invalid credentials" },
    },
}), authController.loginUser);
authRouter.use("/me", authMiddleware);
// 🔹 Protected: Get Current User
authRouter.openapi(createRoute({
    method: "get",
    path: "/me",
    tags: ["Authentication"],
    summary: "Get current user information",
    security: [{ bearerAuth: [] }], // 🔑 Reference the security scheme in OpenAPI
    responses: {
        200: {
            description: "Current user data",
            content: {
                "application/json": {
                    schema: z.object({
                        success: z.boolean(),
                        user: z.object({
                            id: z.string(),
                            email: z.string(),
                            name: z.string().nullable(),
                            createdAt: z.string().datetime(),
                        }),
                    }),
                },
            },
        },
        401: { description: "Unauthorized" },
    },
}), authController.getCurrentUser);
export default authRouter;
//# sourceMappingURL=auth.route.js.map