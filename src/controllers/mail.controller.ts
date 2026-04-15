import { Context } from "hono";
import { ZodError } from "zod";
import { createNoteSchema, shareNoteSchema } from "../dto/note.dto.js";
import { noteServices } from "../services/note.service.js";
import { emailSchema } from "../dto/mail.dto.js";
import { mailService } from "../services/mail.service.js";

export class MailController {
  async createMail(c: Context) {
    try {
      const mailInput = await c.req.json();

      const validateMail = emailSchema.parse(mailInput);

      const result = await mailService.sendMail(validateMail);

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
}
export const mailController = new MailController();
