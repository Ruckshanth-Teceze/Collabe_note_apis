import { Context } from "hono";
import { loginSchema, registerSchema } from "../dto/auth.dto.js";
import { ZodError } from "zod/v4";
import { authServices } from "../services/auth.service.js";

export class AuthController {
  async registerUser(c: Context) {
    try {
      const userData = await c.req.json();
      const validUser = registerSchema.parse(userData);
      const result = await authServices.userRegister(validUser);

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

  async loginUser(c: Context) {
    try {
      const body = await c.req.json();
      const validUser = loginSchema.parse(body);
      const result = await authServices.userLogin(validUser);

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

  async getCurrentUser(c: Context) {
    try {
      const userId = c.get("userId");

      const result = await authServices.getuserData(userId || "");

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

  async getAllUser(c: Context) {
    try {
      const result = await authServices.getUsers();

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

export const authController = new AuthController();
