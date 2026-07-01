import { skillIcons } from "./skills";

// public 폴더의 파일은 import 없이, 루트(/) 기준 문자열 경로로 바로 접근합니다.
const getThumbnail = (filename) => `/assets/project/${filename}`;

export const projects = [
  {
    category: "Web",
    id: "kosaf",
    thumbnail: getThumbnail("kosaf.png"),
    title: "한국장학재단",
    period: {
      start: "26.05.12",
      end: "26.06.12",
    },
    tags: ["팀 프로젝트(3인)", "리디자인", "퍼블리싱", "반응형"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convincere honeste industria sint debemus, periculis ullius indoctum. Legantur disserendum",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.figma, skillIcons.photoshop, skillIcons.illustrator],
    links: [
      { label: "기존 사이트", url: "#" },
      { label: "프로젝트", url: "#" },
      { label: "Figma", url: "#" },
      { label: "Notion", url: "#" },
    ],
  },
  {
    category: "Web",
    id: "biennale",
    thumbnail: getThumbnail("biennale.png"),
    title: "대구사진비엔날레",
    period: {
      start: "26.04.13",
      end: "26.05.07",
    },
    tags: ["개인 프로젝트", "리디자인", "퍼블리싱", "반응형"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convincere honeste industria sint debemus, periculis ullius indoctum. Legantur disserendum",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.figma, skillIcons.photoshop, skillIcons.illustrator],
    links: [
      { label: "기존 사이트", url: "#" },
      { label: "프로젝트", url: "#" },
      { label: "Figma", url: "#" },
      { label: "Notion", url: "#" },
    ],
  },
  {
    category: "Web",
    id: "festa",
    thumbnail: getThumbnail("festa.png"),
    title: "이마트 - 고래잇페스타",
    period: {
      start: "26.05.12",
      end: "26.06.12",
    },
    tags: ["랜딩페이지"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convincere honeste industria sint debemus, periculis ullius indoctum. Legantur disserendum",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.figma, skillIcons.photoshop, skillIcons.illustrator],
    links: [
      { label: "기존 사이트", url: "#" },
      { label: "프로젝트", url: "#" },
      { label: "Figma", url: "#" },
      { label: "Notion", url: "#" },
    ],
  },
  // 다음 프로젝트 추가 시 여기에 객체 추가
];