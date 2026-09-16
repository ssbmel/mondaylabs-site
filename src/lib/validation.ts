import type { ContactFormErrors, ContactFormValues } from "./types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9-+\s]{9,15}$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.companyName.trim()) {
    errors.companyName = "회사 / 브랜드명을 입력해주세요.";
  }

  if (!values.contactName.trim()) {
    errors.contactName = "담당자명을 입력해주세요.";
  }

  if (!values.phone.trim()) {
    errors.phone = "연락처를 입력해주세요.";
  } else if (!PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "올바른 연락처 형식으로 입력해주세요.";
  }

  if (!values.email.trim()) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "올바른 이메일 형식으로 입력해주세요.";
  }

  if (!values.projectType) {
    errors.projectType = "제작 유형을 선택해주세요.";
  }

  if (!values.budget) {
    errors.budget = "예산 범위를 선택해주세요.";
  }

  if (!values.privacyConsent) {
    errors.privacyConsent = "개인정보 수집 및 이용에 동의해주세요.";
  }

  return errors;
}

export function hasErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
