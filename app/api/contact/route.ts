import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, E-Mail und Nachricht sind erforderlich" },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO || !process.env.CONTACT_FROM) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { error: "Server-Konfigurationsfehler. Bitte kontaktieren Sie den Administrator." },
        { status: 500 }
      );
    }

    // Send email using Resend
    await resend.emails.send({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #986AC6;">Neue Kontaktanfrage</h2>

          <div style="background-color: #f9f7fc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>E-Mail:</strong> <a href="mailto:${email}" style="color: #986AC6;">${email}</a></p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Telefon:</strong> <a href="tel:${phone}" style="color: #986AC6;">${phone}</a></p>` : ""}
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #986AC6;">Nachricht:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">

          <p style="color: #666; font-size: 12px;">
            Diese E-Mail wurde über das Kontaktformular von ambulanter-pflegedienst-magda.de gesendet.
          </p>
        </div>
      `,
      text: `
Neue Kontaktanfrage

Name: ${name}
E-Mail: ${email}
${phone ? `Telefon: ${phone}` : ""}

Nachricht:
${message}

---
Diese E-Mail wurde über das Kontaktformular von ambulanter-pflegedienst-magda.de gesendet.
      `,
    });

    return NextResponse.json(
      { message: "E-Mail erfolgreich gesendet" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    return NextResponse.json(
      { error: "Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
