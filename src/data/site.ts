import type { NavItem, ProcessStep, ServiceItem, WhyUsItem } from "@/lib/types";

export const siteConfig = {
  name: "먼데이랩스",
  shortName: "MondayLabs",
  seoTitle: "웹사이트·앱 개발 외주 제작 전문 | 먼데이랩스",
  description:
    "기업, 브랜드, 매장, 서비스까지 업종 제한 없이 기획부터 디자인, 개발, 배포까지 진행하는 웹사이트·앱 개발 외주 전문 스튜디오입니다.",
  email: "hello@example.com",
  phone: "02-0000-0000",
  businessRegistrationNumber: "000-00-00000",
  address: "서울특별시 (주소 Placeholder)",
};

export const aboutHighlights: ServiceItem[] = [
  {
    index: "01",
    title: "빠르고 원활한 피드백",
    description: "요청과 피드백을 주고받는 과정에서 막힘 없이, 빠르고 명확하게 소통하며 프로젝트를 진행합니다.",
  },
  {
    index: "02",
    title: "실제 개발자가 직접 개발",
    description:
      "AI로 찍어내는 바이브 코딩이 아닌, 실력있는 개발자가 코드를 직접 작성해 예상치 못한 오류와 보안 위험 없이 안정적인 결과물을 제공합니다.",
  },
  {
    index: "03",
    title: "디테일까지 놓치지 않는 반응형",
    description: "PC, 태블릿, 모바일 등 모든 화면에서 자연스럽게 보이도록 작은 디테일까지 꼼꼼하게 다듬어 제작합니다.",
  },
  {
    index: "04",
    title: "보안 헤더까지 꼼꼼하게 점검",
    description:
      "많은 사이트가 놓치기 쉬운 보안 헤더 설정까지 꼼꼼하게 점검하고 적용해, securityheaders.com 기준 A등급을 받는 안전한 웹사이트를 제작합니다.",
  },
];

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export const services: ServiceItem[] = [
  {
    index: "01",
    title: "기업 홈페이지",
    description: "회사와 서비스를 효과적으로 소개하는 반응형 웹사이트",
  },
  {
    index: "02",
    title: "브랜드 홈페이지",
    description: "브랜드의 이미지와 아이덴티티를 전달하는 웹사이트",
  },
  {
    index: "03",
    title: "매장 / 지점 홈페이지",
    description: "헬스장, 학원, 병원, 매장 등 오프라인 사업자를 위한 홈페이지",
  },
  {
    index: "04",
    title: "서비스 / 플랫폼",
    description: "회원, 게시판, 관리자 기능 등이 필요한 맞춤형 웹서비스",
  },
  {
    index: "05",
    title: "랜딩페이지",
    description: "광고, 프로모션, 신규 서비스 등을 위한 목적 중심 페이지",
  },
  {
    index: "06",
    title: "앱 개발",
    description: "iOS / Android 등 비즈니스에 필요한 모바일 앱 기획부터 개발까지",
  },
];

export const processSteps: ProcessStep[] = [
  { index: "01", title: "상담", description: "필요한 홈페이지와 기능을 확인합니다." },
  { index: "02", title: "견적", description: "기능과 작업 범위를 기준으로 견적을 안내합니다." },
  { index: "03", title: "기획 / 디자인", description: "페이지 구성과 디자인 방향을 결정합니다." },
  { index: "04", title: "개발", description: "PC / 모바일 환경에 맞춰 개발합니다." },
  { index: "05", title: "검수", description: "실제 사이트를 확인하고 수정사항을 반영합니다." },
  { index: "06", title: "배포", description: "도메인 연결 및 실제 서비스 배포를 진행합니다." },
];

export const whyUsItems: WhyUsItem[] = [
  {
    title: "기본으로 제공되는 반응형",
    description: "PC와 모바일 어디서 접속해도 자연스럽게 보이는 화면을 기본으로 제작합니다.",
  },
  {
    title: "기획부터 배포까지 한 번에",
    description: "여러 업체를 거칠 필요 없이 기획, 디자인, 개발, 배포를 한 팀이 책임집니다.",
  },
  {
    title: "관리자 페이지 제작 가능",
    description: "필요한 경우 콘텐츠와 데이터를 직접 관리할 수 있는 관리자 페이지도 함께 구축합니다.",
  },
  {
    title: "검색 노출을 고려한 개발",
    description: "네이버, 구글 검색에 노출될 수 있도록 기본적인 SEO 요소를 고려해 개발합니다.",
  },
  {
    title: "실제 운영 환경을 고려한 개발",
    description: "만들고 끝나는 것이 아니라 실제로 운영되는 상황을 고려해 안정적으로 개발합니다.",
  },
  {
    title: "비즈니스에 맞춘 커스텀 기능",
    description: "정해진 틀이 아니라 비즈니스 요구사항에 맞춰 필요한 기능을 설계하고 개발합니다.",
  },
];
