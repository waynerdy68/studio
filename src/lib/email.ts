import nodemailer from 'nodemailer';

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

const transporter = 
  (smtpConfig.host && smtpConfig.auth.user && smtpConfig.auth.pass) 
  ? nodemailer.createTransport(smtpConfig)
  : null;

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions): Promise<{ success: boolean; message?: string }> {
  if (!transporter) {
    const errorMessage = "SMTP not configured. Skipping email send. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in your .env file.";
    console.warn(errorMessage);
    return { success: false, message: errorMessage };
  }

  const mailOptions = {
    from: `"Mayne Inspectors" <${smtpConfig.auth.user}>`,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, message: "Failed to send email." };
  }
}
