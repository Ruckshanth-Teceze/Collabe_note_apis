import { loginSchema, registerSchema } from "../dto/auth.dto.js";
import { ZodError } from "zod/v4";
import { authServices } from "../services/auth.service.js";
export class AuthController {
    async registerUser(c) {
        try {
            const userData = await c.req.json();
            const validUser = registerSchema.parse(userData);
            const result = await authServices.userRegister(validUser);
            return c.json({ success: true, result }, 200);
        }
        catch (error) {
            if (error instanceof ZodError) {
                return c.json({ success: false, message: error.issues }, 400);
            }
            if (error instanceof Error) {
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
    async loginUser(c) {
        try {
            const body = await c.req.json();
            const validUser = loginSchema.parse(body);
            const result = await authServices.userLogin(validUser);
            return c.json({ success: true, result }, 200);
        }
        catch (error) {
            if (error instanceof ZodError) {
                return c.json({ success: false, message: error.issues }, 400);
            }
            if (error instanceof Error) {
                return c.json({ success: false, message: error.message }, 400);
            }
            return c.json({ success: false, message: "Internal server error" }, 500);
        }
    }
    async getCurrentUser(c) {
        try {
            const userId = c.get("userId");
            const result = await authServices.getuserData(userId || "");
            return c.json({ success: true, result }, 200);
        }
        catch (error) {
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
export const authController = new AuthController();
//# sourceMappingURL=auth.controller.js.map