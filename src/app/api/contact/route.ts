import { siteConfig } from "@/data/site";
import type { ContactFormValues } from "@/lib/types";
import { hasErrors, validateContactForm } from "@/lib/validation";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
// 도메인 인증 전에는 Resend 샌드박스 발신 주소만 사용할 수 있다. 도메인을 인증하면 해당 도메인 주소로 교체한다.
const FROM = `${siteConfig.name} 문의 <onboarding@resend.dev>`;
const MAX_FIELD_LENGTH = 5000;

const stringFields = [
  "companyName",
  "contactName",
  "phone",
  "email",
  "projectType",
  "budget",
  "launchDate",
  "message",
] as const;

function isContactPayload(value: unknown): value is ContactFormValues {
  if (typeof value !== "object" || value === null) return false;

  const record = value as Record<string, unknown>;

  return (
    typeof record.privacyConsent === "boolean" &&
    stringFields.every((key) => typeof record[key] === "string" && (record[key] as string).length <= MAX_FIELD_LENGTH)
  );
}

function buildText(values: ContactFormValues) {
  return [
    `회사 / 브랜드명: ${values.companyName}`,
    `담당자명: ${values.contactName}`,
    `연락처: ${values.phone}`,
    `이메일: ${values.email}`,
    `제작 유형: ${values.projectType}`,
    `예산: ${values.budget}`,
    `희망 오픈일: ${values.launchDate || "-"}`,
    "",
    "요청사항:",
    values.message || "-",
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }

  if (!isContactPayload(payload) || hasErrors(validateContactForm(payload))) {
    return Response.json({ success: false }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return Response.json({ success: false }, { status: 500 });
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [siteConfig.email],
      reply_to: payload.email.trim(),
      subject: `[프로젝트 문의] ${payload.companyName} / ${payload.contactName}`.replace(/\s+/g, " "),
      text: buildText(payload),
    }),
  });

  if (!response.ok) {
    console.error("[contact] Resend request failed:", response.status, await response.text());
    return Response.json({ success: false }, { status: 502 });
  }

  return Response.json({ success: true });
}
