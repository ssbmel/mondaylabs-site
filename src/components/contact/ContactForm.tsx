"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent, MouseEvent, ReactNode } from "react";
import { budgetOptions, emailDomainOptions, projectTypeOptions } from "@/data/contact-options";
import { submitContactForm } from "@/lib/contact";
import type { ContactFormErrors, ContactFormValues } from "@/lib/types";
import { hasErrors, validateContactForm } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { AlertIcon, CalendarIcon, CheckIcon, ChevronDownIcon } from "@/components/ui/icons";

const initialValues: ContactFormValues = {
  companyName: "",
  contactName: "",
  phone: "",
  email: "",
  projectType: "",
  budget: "",
  launchDate: "",
  message: "",
  privacyConsent: false,
};

const inputClass =
  "w-full rounded-md border border-line-strong bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-ink focus:outline-none";

function fieldClass(hasError?: string) {
  return `${inputClass} ${hasError ? "border-danger focus:border-danger" : ""}`;
}

// 숫자만 남겨 지역번호 / 국번 / 끝 4자리 순으로 하이픈을 넣는다. (02-000-0000, 010-0000-0000, 0507-0000-0000, 1588-0000)
function formatPhone(input: string) {
  const digits = input.replace(/^\+82\s*/, "0").replace(/\D/g, "");
  const isRepresentative = /^1[5-8]/.test(digits);
  const prefixLength = digits.startsWith("02") ? 2 : isRepresentative || /^050\d/.test(digits) ? 4 : 3;
  const maxLength = isRepresentative ? 8 : prefixLength + 8;

  const prefix = digits.slice(0, prefixLength);
  const rest = digits.slice(prefixLength, maxLength);

  if (rest.length <= 4) return rest ? `${prefix}-${rest}` : prefix;

  // 국번이 3자리인 번호(010-123-4567)는 뒷자리 7자리일 때만 3-4로 나눈다.
  const split = rest.length === 7 ? 3 : 4;
  return `${prefix}-${rest.slice(0, split)}-${rest.slice(split)}`;
}

// appearance-none인 date 입력은 데스크탑 브라우저에 따라 눌러도 달력이 열리지 않아 입력칸 어디를 눌러도 직접 연다. (터치 기기는 기본 동작 사용)
function openDatePicker(event: MouseEvent<HTMLInputElement>) {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  try {
    event.currentTarget.showPicker();
  } catch {
    // showPicker를 지원하지 않는 브라우저는 기본 동작에 맡긴다.
  }
}

const CUSTOM_DOMAIN = "custom";

function splitEmail(email: string): [string, string] {
  const at = email.indexOf("@");
  return at === -1 ? [email, ""] : [email.slice(0, at), email.slice(at + 1)];
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}

function Field({ label, htmlFor, error, required, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-ink">
        {label}
        {required ? <span className="ml-1 text-accent">*</span> : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-danger">
          <AlertIcon className="size-3.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [isCustomDomain, setIsCustomDomain] = useState(false);

  const [emailId, emailDomain] = splitEmail(values.email);

  function updateField<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    updateField(name as keyof ContactFormValues, value as never);
  }

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    updateField("phone", formatPhone(event.target.value));
  }

  function updateEmail(id: string, domain: string) {
    updateField("email", id || domain ? `${id}@${domain}` : "");
  }

  // 붙여넣기·자동완성·직접 "@" 입력으로 전체 주소가 들어오면 아이디와 도메인으로 나눈다.
  function handleEmailIdChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    const at = value.indexOf("@");

    if (at === -1) {
      updateEmail(value, emailDomain);
      return;
    }

    const domain = value.slice(at + 1).replace(/@/g, "");
    setIsCustomDomain(!emailDomainOptions.includes(domain));
    updateEmail(value.slice(0, at), domain);
  }

  function handleEmailDomainSelect(event: ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;

    if (value === CUSTOM_DOMAIN) {
      setIsCustomDomain(true);
      updateEmail(emailId, "");
      return;
    }

    setIsCustomDomain(false);
    updateEmail(emailId, value);
  }

  function handleEmailDomainInput(event: ChangeEvent<HTMLInputElement>) {
    updateEmail(emailId, event.target.value.replace(/@/g, ""));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) {
      return;
    }

    setStatus("submitting");

    try {
      const result = await submitContactForm(values);
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  function handleReset() {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
    setIsCustomDomain(false);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 border border-line bg-paper px-8 py-20 text-center">
        <span className="flex size-12 items-center justify-center rounded-full border border-ink text-ink">
          <CheckIcon className="size-5" />
        </span>
        <div>
          <p className="text-xl font-medium tracking-tight text-ink">문의가 접수되었습니다.</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            남겨주신 연락처로 빠르게 회신드리겠습니다. 감사합니다.
          </p>
        </div>
        <Button variant="secondary" onClick={handleReset}>
          새 문의 작성하기
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">
      {status === "error" ? (
        <div className="flex items-center gap-2.5 border border-danger bg-paper px-5 py-4 text-sm text-danger">
          <AlertIcon className="size-4 shrink-0" />
          전송 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <Field label="회사 / 브랜드명" htmlFor="companyName" error={errors.companyName} required>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={values.companyName}
            onChange={handleInputChange}
            placeholder="회사 또는 브랜드명을 입력해주세요"
            className={fieldClass(errors.companyName)}
          />
        </Field>

        <Field label="담당자명" htmlFor="contactName" error={errors.contactName} required>
          <input
            id="contactName"
            name="contactName"
            type="text"
            value={values.contactName}
            onChange={handleInputChange}
            placeholder="예) 홍길동"
            className={fieldClass(errors.contactName)}
          />
        </Field>

        <Field label="연락처" htmlFor="phone" error={errors.phone} required>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handlePhoneChange}
            placeholder="010-0000-0000"
            className={fieldClass(errors.phone)}
          />
        </Field>

        <Field label="이메일" htmlFor="email" error={errors.email} required>
          <div className="flex items-center gap-2">
            <input
              id="email"
              type="text"
              value={emailId}
              onChange={handleEmailIdChange}
              placeholder="example"
              className={`${fieldClass(errors.email)} min-w-0 flex-1`}
            />
            <span className="text-ink-faint" aria-hidden="true">
              @
            </span>
            <div className="relative min-w-0 flex-1">
              <select
                aria-label="이메일 도메인 선택"
                value={isCustomDomain ? CUSTOM_DOMAIN : emailDomain}
                onChange={handleEmailDomainSelect}
                className={`${fieldClass(errors.email)} cursor-pointer appearance-none pr-10`}
              >
                <option value="" disabled>
                  선택
                </option>
                {emailDomainOptions.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
                <option value={CUSTOM_DOMAIN}>직접 입력</option>
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
            </div>
          </div>
          {isCustomDomain ? (
            <input
              type="text"
              aria-label="이메일 도메인 직접 입력"
              value={emailDomain}
              onChange={handleEmailDomainInput}
              placeholder="example.com"
              className={`${fieldClass(errors.email)} mt-2`}
            />
          ) : null}
        </Field>

        <Field label="제작 유형" htmlFor="projectType" error={errors.projectType} required>
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              value={values.projectType}
              onChange={handleInputChange}
              className={`${fieldClass(errors.projectType)} cursor-pointer appearance-none pr-10`}
            >
              <option value="" disabled>
                선택해주세요
              </option>
              {projectTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
          </div>
        </Field>

        <Field label="예산" htmlFor="budget" error={errors.budget} required>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={values.budget}
              onChange={handleInputChange}
              className={`${fieldClass(errors.budget)} cursor-pointer appearance-none pr-10`}
            >
              <option value="" disabled>
                선택해주세요
              </option>
              {budgetOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
          </div>
        </Field>

        <Field label="희망 오픈일" htmlFor="launchDate" error={errors.launchDate}>
          <div className="relative">
            <input
              id="launchDate"
              name="launchDate"
              type="date"
              value={values.launchDate}
              onChange={handleInputChange}
              onClick={openDatePicker}
              className={`${fieldClass(errors.launchDate)} min-h-11.5 min-w-0 max-w-full cursor-pointer appearance-none pr-10 [&::-webkit-calendar-picker-indicator]:pointer-events-none [&::-webkit-calendar-picker-indicator]:opacity-0`}
            />
            <CalendarIcon className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
          </div>
        </Field>

        <div className="sm:col-span-2">
          <Field label="필요한 기능 / 참고 사이트 / 요청사항" htmlFor="message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleInputChange}
              placeholder="필요한 기능, 참고하고 싶은 사이트, 그 외 요청사항을 자유롭게 남겨주세요."
              className={`resize-none ${fieldClass(errors.message)}`}
            />
          </Field>
        </div>
      </div>

      <div>
        <label htmlFor="privacyConsent" className="flex items-start gap-3">
          <input
            id="privacyConsent"
            name="privacyConsent"
            type="checkbox"
            checked={values.privacyConsent}
            onChange={(e) => updateField("privacyConsent", e.target.checked)}
            className="mt-0.5 size-4 shrink-0 rounded-sm border-line-strong text-accent focus:outline-none"
          />
          <span className="text-sm leading-relaxed text-ink-soft">
            수집한 개인정보는 프로젝트 문의 응대 목적으로만 사용되며, 문의 처리 후 파기됩니다. 개인정보 수집 및 이용에
            동의합니다.
            <span className="ml-1 text-accent">*</span>
          </span>
        </label>
        {errors.privacyConsent ? (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-danger">
            <AlertIcon className="size-3.5 shrink-0" />
            {errors.privacyConsent}
          </p>
        ) : null}
      </div>

      <div>
        <Button type="submit" size="lg" loading={status === "submitting"} className="w-full sm:w-auto">
          {status === "submitting" ? "전송 중..." : "프로젝트 문의하기"}
        </Button>
      </div>
    </form>
  );
}
