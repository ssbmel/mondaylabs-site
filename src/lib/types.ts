export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
}

export type GalleryDevice = "PC" | "Tablet" | "Mobile";

export interface GalleryItem {
  label: string;
  device: GalleryDevice;
  src?: string;
}

export type ProjectStatus = "completed" | "in-progress";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  year: string;
  work: string[];
  status: ProjectStatus;
  summary: string;
  heroImage?: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  gallery: GalleryItem[];
  result: string;
}

export type ProjectType = "기업 홈페이지" | "브랜드 홈페이지" | "매장 홈페이지" | "랜딩페이지" | "웹서비스" | "기타";

export type BudgetRange = "100~300만원" | "300~500만원" | "500~1,000만원" | "1,000만원 이상" | "아직 정해지지 않음";

export interface ContactFormValues {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  projectType: ProjectType | "";
  budget: BudgetRange | "";
  launchDate: string;
  message: string;
  privacyConsent: boolean;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;
