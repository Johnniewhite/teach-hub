import type { NextApiRequest, NextApiResponse } from "next";
import { ServerClient } from "postmark";

const postmarkClient = new ServerClient(process.env.POSTMARK_SERVER_TOKEN!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, name, reference } = req.body;

    try {
      await postmarkClient.sendEmail({
        From: process.env.SENDER_EMAIL!,
        To: email,
        Subject:
          "TED Circle Social Innovators Programme - Payment Confirmation",
        TextBody: `Dear ${name},\n\nThank you for your payment for the TED Circle Social Innovators Programme. Your payment reference is: ${reference}.\n\nHere are your next steps: [Include further instructions here]\n\nBest regards,\nTED Circle Team`,
        HtmlBody: `<html><body><p>Dear ${name},</p><p>Thank you for your payment for the TED Circle Social Innovators Programme. Your payment reference is: <strong>${reference}</strong>.</p><p>Here are your next steps: [Include further instructions here]</p><p>Best regards,<br>TED Circle Team</p></body></html>`,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
