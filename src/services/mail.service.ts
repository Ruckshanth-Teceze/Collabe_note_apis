import { createMailDto, emailSchema } from "../dto/mail.dto.js";
import { z } from "zod";

const N8N_WEBHOOK_URL =
  "https://ruckshanth-teceze.app.n8n.cloud/webhook-test/share-note";

export class MailService {
  async sendMail(mailData: createMailDto) {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`n8n webhook failed: ${response.status} - ${errorText}`);
    }

    return await response.json();
  }
}

export const mailService = new MailService();
