import z from "zod";

export const emailSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(1).max(200),
  message: z.string().min(1).max(5000),
})

export type createMailDto = z.infer<typeof emailSchema>;