import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, message } = body as {
    name: string;
    email: string;
    phone?: string;
    message: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Popunite sva obavezna polja." }, { status: 400 });
  }

  const apiKey = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  const sender = process.env.SITE_MAIL_SENDER;
  const receiver = process.env.SITE_MAIL_RECEIVER;

  if (!apiKey || !secretKey || !sender || !receiver) {
    return NextResponse.json({ error: "Greška u konfiguraciji." }, { status: 500 });
  }

  const credentials = Buffer.from(`${apiKey}:${secretKey}`).toString("base64");

  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: sender, Name: "LED Plus sajt" },
          To: [{ Email: receiver, Name: "LED Plus" }],
          ReplyTo: { Email: email, Name: name },
          Subject: `Nova poruka sa sajta – ${name}`,
          HTMLPart: `
            <h2>Nova poruka sa LED Plus sajta</h2>
            <table cellpadding="8" style="border-collapse:collapse">
              <tr><td><strong>Ime:</strong></td><td>${name}</td></tr>
              <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
              ${phone ? `<tr><td><strong>Telefon:</strong></td><td>${phone}</td></tr>` : ""}
              <tr><td><strong>Poruka:</strong></td><td style="white-space:pre-wrap">${message}</td></tr>
            </table>
          `,
        },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Mailjet error:", err);
    return NextResponse.json({ error: "Slanje nije uspelo. Pokušajte ponovo." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
