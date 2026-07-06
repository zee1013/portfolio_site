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
      "장학금 페이지(서브 페이지) 전체 퍼블리싱을 담당하였으며, 다양한 디바이스 환경에서 일관된 사용자 경험을 제공할 수 있도록 반응형 웹 구조를 구현하였다.",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.figma, skillIcons.photoshop, skillIcons.vscode],
    links: [
      { label: "기존 사이트", url: "#" },
      { label: "리디자인", url: "https://kosaf.vercel.app/" },
      { label: "Figma", url: "#" },
      { label: "Notion", url: "https://app.notion.com/p/3817c519a23081ec92f8ea91f4a13d7e?source=copy_link" },
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
      "기존 사이트는 텍스트 중심의 정보 나열 방식으로 구성되어 있었다. 리디자인에서는 대형 비주얼 배너와 전시 이미지를 활용하여 사용자가 첫 화면에서 전시 분위기를 직관적으로 느낄 수 있도록 개선했다.",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.figma, skillIcons.vscode],
    links: [
      { label: "기존 사이트", url: "#" },
      { label: "Figma", url: "#" },
      { label: "Notion", url: "#" },
    ],
  },
  {
    category: "Web",
    id: "festa",
    thumbnail: getThumbnail("festa.png"),
    title: "이마트 고래잇페스타",
    period: {
      start: "26.06.10",
      end: "26.06.15",
    },
    tags: ["랜딩페이지"],
    description:
      "본 프로젝트는 행사 정보 전달과 참여 유도를 목적으로 하며, 포스터 및 전단에 분산되어 있는 정보를 하나의 랜딩페이지로 통합하여 사용자가 보다 직관적으로 혜택을 확인할 수 있도록 기획하였다.",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.figma, skillIcons.photoshop, skillIcons.illustrator],
    links: [
      { label: "Figma", url: "#" },
      { label: "Notion", url: "#" },
    ],
  },
  // 다음 프로젝트 추가 시 여기에 객체 추가
];