import { skillIcons } from "./skills";

// public 폴더의 파일은 import 없이, 루트(/) 기준 문자열 경로로 바로 접근합니다.
const getThumbnail = (filename) => `/assets/project/${filename}`;

export const coding = [
 {
  category: "cloneCoding",
  id: "shucle",
  thumbnail: getThumbnail("shucle.png"),
  title: "SHUCLE",
  period: {
    start: "26.04.03",
    end: "26.04.16",
  },
  tags: ["클론코딩", "반응형"],
  description:
    "SHUCLE 웹사이트를 클론코딩하며 실제 서비스의 레이아웃 구조를 분석하고 구현한 프로젝트이다.",
  tools: [skillIcons.vscode],
  links: [
    { label: "Vercel", url:"https://shucle-clone.vercel.app/"},
    { label: "Notion", url:"https://app.notion.com/p/SHUCLE-3877c519a2308013b62ff0248c223f6e?source=copy_link"}
  ], // 추가
},
  {
    category: "cloneCoding",
    id: "baskinrobbins",
    thumbnail: getThumbnail("baskinrobbins.png"),
    title: "Baskin Robbins",
    period: {
      start: "26.04.06",
      end: "26.04.10",
    },
    tags: ["클론코딩"],
    description:
      "배스킨라빈스 공식 웹사이트를 분석하고 구현하며 실제 서비스의 UI 구조와 퍼블리싱 방식을 학습한 클론코딩 프로젝트이다.",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.vscode],
    links: [
      { label: "Vercel", url: "https://baskinrobbins-clone.vercel.app/" },
      { label: "Notion", url: "https://app.notion.com/p/Baskin-Robbins-3827c519a2308137be40f6c02a00e47c?source=copy_link" },
      
    ],
  },
  // 다음 프로젝트 추가 시 여기에 객체 추가
];