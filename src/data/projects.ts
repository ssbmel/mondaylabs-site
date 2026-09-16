import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "fitness-brand-website",
    title: "헬스장 공식 홈페이지",
    client: "피트니스 브랜드 (상호 비공개)",
    category: "Fitness / Brand Website",
    industry: "피트니스 · 브랜드",
    year: "2025",
    work: ["기획", "UI/UX", "Frontend", "Backend", "Admin", "Deployment", "SEO"],
    status: "completed",
    summary: "헬스장 브랜드와 여러 지점의 정보를 효과적으로 제공하고 관리할 수 있도록 구축한 공식 홈페이지.",
    overview:
      "여러 지점을 운영하는 피트니스 브랜드를 위한 공식 홈페이지입니다. 방문자가 브랜드를 신뢰하고 가까운 지점을 쉽게 찾을 수 있도록, 브랜드 소개부터 지점 안내, 트레이너 소개, 프로모션까지 하나의 흐름으로 연결되는 구조로 설계했습니다.",
    challenge:
      "지점마다 다른 위치, 시설, 트레이너, 프로모션 정보를 하나의 사이트 안에서 헷갈리지 않게 보여줘야 했습니다. 또한 운영팀이 개발자 없이도 지점 정보와 프로모션을 직접 갱신할 수 있어야 한다는 요구가 있었습니다.",
    solution:
      "지점 데이터를 별도의 구조로 관리하여 지점별 상세 페이지를 일관된 템플릿으로 자동 생성하도록 설계했습니다. 운영팀이 지점 정보, 트레이너 프로필, 프로모션을 직접 등록·수정할 수 있는 관리자 페이지를 함께 구축하고, 검색 노출을 고려한 기본적인 SEO 설정을 반영했습니다.",
    features: ["반응형 웹", "지점별 상세 페이지", "트레이너 소개", "프로모션 관리", "관리자 페이지", "검색엔진 최적화"],
    gallery: [
      { label: "메인 페이지", device: "PC" },
      { label: "지점 상세 페이지", device: "PC" },
      { label: "트레이너 소개", device: "Tablet" },
      { label: "모바일 메인 화면", device: "Mobile" },
      { label: "모바일 지점 페이지", device: "Mobile" },
    ],
    result:
      "브랜드와 지점 정보를 한 곳에서 확인할 수 있게 되면서 문의 전 이탈이 줄었고, 운영팀이 별도 개발 요청 없이 지점 정보와 프로모션을 직접 관리하고 있습니다.",
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
