import { NextResponse } from "next/server";

// Enquiry form yahan aata hai — yahan se:
// 1) School ke email pe bhejo (Nodemailer / Resend)
// 2) Ya principal ke WhatsApp pe auto-message (WhatsApp Cloud API / Twilio)
// 3) Ya Google Sheet mein save karo (free CRM jaisa)
export async function POST(req: Request) {
  const data = await req.json();

  // TODO: email/WhatsApp/Sheet integration
  console.log("New enquiry:", data);

  return NextResponse.json({ ok: true });
}
