import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  workEmail: z.string().email("Please enter a valid work email address"),
  orgSize: z.string().min(1, "Organization size is required"),
  primaryGoal: z.string().min(1, "Primary security goal is required"),
  projectScope: z.string().min(1, "Project scope description is required"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const host = process.env.SMTP_HOST || "mail.bitlabsbuild.com";
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = process.env.SMTP_SECURE !== "false";
    const user = process.env.SMTP_USER || "redfox@bitlabsbuild.com";
    const pass = process.env.SMTP_PASS || "";
    const toEmail = process.env.CONTACT_TO_EMAIL || "redfox@bitlabsbuild.com";

    if (!pass || pass === "YOUR_EMAIL_PASSWORD_HERE") {
      console.warn(
        "SMTP_PASS is not configured or using default placeholder in .env file."
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f1218; color: #e2e8f0; padding: 24px; border-radius: 8px; border: 1px solid #1e293b;">
        <h2 style="color: #ef4444; margin-top: 0; font-size: 20px;">New Consultation Request — RedFox</h2>
        <p style="color: #94a3b8; font-size: 14px;">A visitor submitted a new inquiry via the RedFox Contact Form.</p>
        <hr style="border: 0; border-top: 1px solid #334155; margin: 20px 0;" />
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 180px;"><strong>Full Name:</strong></td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${escapeHtml(data.fullName)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;"><strong>Work Email:</strong></td>
            <td style="padding: 8px 0; color: #60a5fa;"><a href="mailto:${escapeHtml(data.workEmail)}" style="color: #60a5fa; text-decoration: underline;">${escapeHtml(data.workEmail)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;"><strong>Organization Size:</strong></td>
            <td style="padding: 8px 0; color: #ffffff;">${escapeHtml(data.orgSize)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;"><strong>Primary Goal:</strong></td>
            <td style="padding: 8px 0; color: #ffffff;">${escapeHtml(data.primaryGoal)}</td>
          </tr>
        </table>
        
        <div style="padding: 16px; background-color: #181e29; border-radius: 6px; border-left: 4px solid #ef4444;">
          <strong style="color: #94a3b8; display: block; margin-bottom: 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Project Scope & Requirements:</strong>
          <p style="margin: 0; white-space: pre-wrap; color: #f8fafc; line-height: 1.5; font-size: 14px;">${escapeHtml(data.projectScope)}</p>
        </div>

        <footer style="margin-top: 24px; font-size: 12px; color: #64748b; text-align: center;">
          Sent from RedFox Web Platform &bull; BitLabs Technology PLC
        </footer>
      </div>
    `;

    const textContent = `
New Consultation Request — RedFox

Full Name: ${data.fullName}
Work Email: ${data.workEmail}
Organization Size: ${data.orgSize}
Primary Goal: ${data.primaryGoal}

Project Scope & Requirements:
${data.projectScope}
    `.trim();

    try {
      const info = await transporter.sendMail({
        from: `"RedFox Contact Form" <${user}>`,
        replyTo: data.workEmail,
        to: toEmail,
        subject: `[RedFox Inquiry] ${data.fullName} (${data.orgSize}) - ${data.primaryGoal}`,
        text: textContent,
        html: htmlContent,
      });

      return {
        success: true,
        message: "Your consultation request has been sent successfully.",
        messageId: info.messageId,
      };
    } catch (error: any) {
      console.error("Failed to send email via SMTP:", error);
      throw new Error(
        error?.message || "Failed to send email. Please verify SMTP credentials in .env."
      );
    }
  });

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
