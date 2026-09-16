"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { budgetOptions, projectTypeOptions } from "@/data/contact-options";
import { submitContactForm } from "@/lib/contact";
import type { ContactFormErrors, ContactFormValues } from "@/lib/types";
import { hasErrors, validateContactForm } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { AlertIcon, CheckIcon, ChevronDownIcon } from "@/components/ui/icons";

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

  function updateField<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    updateField(name as keyof ContactFormValues, value as never);
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
            onChange={handleInputChange}
            placeholder="010-0000-0000"
            className={fieldClass(errors.phone)}
          />
        </Field>

        <Field label="이메일" htmlFor="email" error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleInputChange}
            placeholder="example@email.com"
            className={fieldClass(errors.email)}
          />
        </Field>

        <Field label="제작 유형" htmlFor="projectType" error={errors.projectType} required>
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              value={values.projectType}
              onChange={handleInputChange}
              className={`${fieldClass(errors.projectType)} appearance-none pr-10`}
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
              className={`${fieldClass(errors.budget)} appearance-none pr-10`}
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

        <div className="sm:col-span-2">
          <Field label="희망 오픈일" htmlFor="launchDate" error={errors.launchDate}>
            <input
              id="launchDate"
              name="launchDate"
              type="date"
              value={values.launchDate}
              onChange={handleInputChange}
              className={`${fieldClass(errors.launchDate)} sm:max-w-xs`}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="필요한 기능 / 참고 사이트 / 요청사항" htmlFor="message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleInputChange}
              placeholder="필요한 기능, 참고하고 싶은 사이트, 그 외 요청사항을 자유롭게 남겨주세요."
              className={fieldClass(errors.message)}
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
