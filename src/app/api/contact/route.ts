import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  fullName?: string;
  companyName?: string;
  phone?: string;
  senderEmail?: string;
  industry?: string;
  message?: string;
};

const CONTACT_TO = process.env.CONTACT_TO ?? "info@injaz.pro";
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT ?? "587");
const SMTP_SECURE = process.env.SMTP_SECURE === "true";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM = process.env.SMTP_FROM ?? "Injaz Website <info@injaz.pro>";

function validatePayload(payload: ContactPayload) {
  if (!payload.fullName?.trim()) {
    return "يرجى إدخال الاسم الكامل.";
  }
  if (!payload.senderEmail?.trim()) {
    return "يرجى إدخال بريدك الإلكتروني حتى نتمكن من الرد عليك.";
  }
  if (!/^\S+@\S+\.\S+$/.test(payload.senderEmail)) {
    return "يرجى إدخال بريد إلكتروني صحيح.";
  }
  if (!payload.message?.trim()) {
    return "يرجى كتابة تفاصيل الطلب أو الاستفسار.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ ok: false, error: validationError }, { status: 400 });
    }

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || Number.isNaN(SMTP_PORT)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "خدمة البريد غير مهيأة حالياً. يرجى ضبط إعدادات SMTP في متغيرات البيئة.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const lines = [
      `الاسم: ${payload.fullName?.trim() ?? "-"}`,
      `الشركة: ${payload.companyName?.trim() || "-"}`,
      `الهاتف: ${payload.phone?.trim() || "-"}`,
      `البريد الإلكتروني: ${payload.senderEmail?.trim() ?? "-"}`,
      `القطاع: ${payload.industry?.trim() || "-"}`,
      "",
      "الرسالة:",
      payload.message?.trim() ?? "-",
    ];

    await transporter.sendMail({
      from: SMTP_FROM,
      to: CONTACT_TO,
      replyTo: payload.senderEmail?.trim(),
      subject: `طلب جديد من موقع إنجاز ERP - ${payload.fullName?.trim()}`,
      text: lines.join("\n"),
      html: `
        <div dir="rtl" style="font-family:Arial,sans-serif;line-height:1.8;color:#1f2937">
          <h2 style="margin:0 0 16px">طلب جديد من موقع إنجاز ERP</h2>
          <p><strong>الاسم:</strong> ${payload.fullName?.trim()}</p>
          <p><strong>الشركة:</strong> ${payload.companyName?.trim() || "-"}</p>
          <p><strong>الهاتف:</strong> ${payload.phone?.trim() || "-"}</p>
          <p><strong>البريد الإلكتروني:</strong> ${payload.senderEmail?.trim()}</p>
          <p><strong>القطاع:</strong> ${payload.industry?.trim() || "-"}</p>
          <p><strong>الرسالة:</strong></p>
          <p>${(payload.message?.trim() || "-").replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.",
      },
      { status: 500 },
    );
  }
}
