import { Resend } from "resend";
import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

const GUIDE_FILENAME = "when-not-to-build-an-mmm.pdf";
const GUIDE_TITLE = "When NOT to Build a Media Mix Model";

export async function POST(request: Request) {
  try {
    const { name, email, turnstileToken } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const turnstileRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: turnstileToken || "",
        }),
      }
    );
    const turnstileData = await turnstileRes.json();

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 400 }
      );
    }

    const pdfPath = path.join(process.cwd(), "public", "guides", GUIDE_FILENAME);
    const pdfBuffer = await readFile(pdfPath);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error: userEmailError } = await resend.emails.send({
      from: "QuantVibe AI <contact@contact.quantvibe.ai>",
      to: email,
      replyTo: "nadir@quantvibe.ai",
      subject: `Your free guide: ${GUIDE_TITLE}`,
      text: [
        `Hi ${name.split(" ")[0]},`,
        "",
        `Thanks for requesting our guide. It's attached to this email.`,
        "",
        `"${GUIDE_TITLE}" walks through seven scenarios where an MMM will mislead you, and what to do instead.`,
        "",
        `If, after reading, you think an MMM might be right for your business, we'd welcome the conversation. Just reply to this email, or visit quantvibe.ai/media-mix-model.`,
        "",
        `Best,`,
        `Nadir`,
        `QuantVibe AI`,
      ].join("\n"),
      attachments: [
        {
          filename: GUIDE_FILENAME,
          content: pdfBuffer,
        },
      ],
    });

    if (userEmailError) {
      console.error("Resend user email error:", userEmailError);
      return NextResponse.json(
        { error: userEmailError.message },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "QuantVibe AI <contact@contact.quantvibe.ai>",
      to: "nadir@quantvibe.ai",
      replyTo: email,
      subject: `New guide download: ${name}`,
      text: [
        `New lead downloaded: ${GUIDE_TITLE}`,
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Time: ${new Date().toISOString()}`,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Guide download error:", error);
    return NextResponse.json(
      { error: "Failed to send guide. Please try again." },
      { status: 500 }
    );
  }
}
