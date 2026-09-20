import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "fitness-brand-website",
    title: "헬스장 공식 홈페이지",
    client: "콤마짐 (COMMAGYM)",
    category: "Fitness / Brand Website",
    industry: "피트니스 · 브랜드",
    year: "2026",
    work: ["기획", "UI/UX", "Frontend", "Backend", "Admin", "Deployment", "SEO"],
    status: "completed",
    summary:
      "서울·경기 5개 지점을 운영하는 프리미엄 피트니스 브랜드 콤마짐의 공식 홈페이지. 지점·프로모션·공지를 한 곳에서 안내하고, 운영팀이 직접 관리할 수 있도록 구축했습니다.",
    heroImage: "/projects/fitness-brand-website/hero.jpg",
    liveUrl: "https://www.commagym.co.kr",
    overview:
      "서울·경기에서 5개 지점을 운영하는 프리미엄 피트니스 브랜드 콤마짐(COMMAGYM)의 공식 홈페이지입니다. 다크 배경에 골드 포인트를 살린 브랜드 무드를 웹에 그대로 옮겼고, 방문자가 브랜드 소개에서 가까운 지점 확인, 프로모션, 예약·무료 상담 신청까지 끊김 없이 이어지도록 설계했습니다.",
    challenge:
      "지점마다 위치, 운영시간, 시설, 트레이너, 프로모션이 달라 한 사이트 안에서 헷갈리지 않게 보여줘야 했습니다. 오픈 예정 지점까지 등록해야 하는 만큼, 운영팀이 개발자 없이도 지점 정보와 공지·프로모션·FAQ를 직접 갱신할 수 있어야 했습니다.",
    solution:
      "지점 데이터를 하나의 구조로 관리해 지점별 상세 페이지가 같은 템플릿으로 생성되도록 했습니다. 상세 페이지에는 시설 갤러리, 트레이너, 카카오맵 오시는 길, 예약·상담 버튼을 담았고, 오픈일에 따라 운영중·NEW OPEN·오픈예정 상태가 자동으로 표시됩니다. 관리자 페이지에서는 지점(노출 순서 포함)·공지사항·프로모션·FAQ를 직접 등록·수정할 수 있으며, 구조화 데이터(JSON-LD)와 사이트맵 등 SEO 기본 설정, 방문 통계 대시보드를 함께 구축했습니다.",
    features: [
      "반응형 웹 (PC · 태블릿 · 모바일)",
      "지점별 상세 페이지 (시설 갤러리 · 트레이너 · 오시는 길)",
      "카카오맵 기반 전 지점 위치 안내",
      "지점별 프로모션 · 공지사항 (공지 팝업 지원)",
      "카테고리별 FAQ",
      "관리자 페이지 (지점 · 공지 · 프로모션 · FAQ 관리)",
      "방문 통계 대시보드",
      "검색엔진 최적화 (JSON-LD · 사이트맵)",
    ],
    gallery: [],
    result:
      "5개 지점의 위치·시설·프로모션·공지를 하나의 사이트에서 확인할 수 있게 되었고, 운영팀이 별도 개발 요청 없이 관리자 페이지에서 직접 콘텐츠를 갱신하며 운영하고 있습니다.",
  },
  {
    slug: "culture-contents-website",
    title: "문화 콘텐츠 사업 홈페이지",
    client: "문화 콘텐츠 사업자 (Client 정보 비공개)",
    category: "Culture / Contents",
    industry: "문화 · 콘텐츠",
    year: "제작 중",
    work: ["기획", "UI/UX", "Frontend"],
    status: "in-progress",
    summary: "현재 제작이 진행 중인 프로젝트입니다. 완료 후 실제 내용으로 업데이트될 예정입니다.",
    overview:
      "문화 콘텐츠 사업자를 위한 공식 홈페이지로, 현재 기획 및 개발이 진행되고 있습니다. 아래 내용은 프로젝트 진행 중 사용되는 placeholder 데이터입니다.",
    challenge: "프로젝트 진행 중이며, 완료 후 실제 요구사항과 문제 정의로 업데이트될 예정입니다.",
    solution: "프로젝트 진행 중이며, 완료 후 실제 설계 및 해결 방식으로 업데이트될 예정입니다.",
    features: ["반응형 웹", "콘텐츠 소개 페이지", "검색엔진 최적화"],
    gallery: [
      { label: "메인 페이지 (제작 중)", device: "PC" },
      { label: "모바일 화면 (제작 중)", device: "Mobile" },
    ],
    result: "프로젝트가 진행 중입니다. 오픈 후 실제 운영 내용으로 업데이트될 예정입니다.",
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
