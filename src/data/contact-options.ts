import type { BudgetRange, ProjectType } from "@/lib/types";

export const projectTypeOptions: ProjectType[] = [
  "기업 홈페이지",
  "브랜드 홈페이지",
  "매장 홈페이지",
  "랜딩페이지",
  "웹서비스",
  "앱 개발",
  "기타",
];

export const emailDomainOptions = [
  "naver.com",
  "gmail.com",
  "daum.net",
  "hanmail.net",
  "kakao.com",
  "nate.com",
  "outlook.com",
  "icloud.com",
];

export const budgetOptions: BudgetRange[] = [
  "100~300만원",
  "300~500만원",
  "500~1,000만원",
  "1,000만원 이상",
  "아직 정해지지 않음",
];
