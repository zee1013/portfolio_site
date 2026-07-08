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
    // description : 카드 UI 썸네일에 표시되는 내용, detail 설명이 없으면 Modal창에서도 description에 적힌 텍스트가 보여짐.
    description:
      "장학금 페이지(서브 페이지) 전체 퍼블리싱을 담당하였으며, 다양한 디바이스 환경에서 일관된 사용자 경험을 제공할 수 있도록 반응형 웹 구조를 구현하였다.",
      detail: "",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.figma, skillIcons.photoshop, skillIcons.vscode],
    links: [
      { label: "기존 사이트", url: "https://www.kosaf.go.kr/ko/main.do" },
      { label: "리디자인", url: "https://kosaf.vercel.app/" },
      { label: "Figma", url: "https://www.figma.com/design/nIpOAbTlN9PWp23dgOS2Y5/1%EC%A1%B0--%EC%9D%B4%EC%83%81%EC%9C%A4--%EB%B0%B0%EC%9D%80%EC%A7%80--%EC%9D%B4%EC%95%84%EC%98%81-?node-id=33-4&t=JMOKipUJYqEP5yGN-1" },
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
    // description : 카드 UI 썸네일에 표시되는 내용, detail 설명이 없으면 Modal창에서도 description에 적힌 텍스트가 보여짐.
    description:
      "텍스트 중심의 정보 나열 방식인 기존 사이트에서 대형 비주얼 배너와 전시 이미지를 활용하여 사용자가 첫 화면에서 전시 분위기를 직관적으로 느낄 수 있도록 개선했다.",
    detail: "",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.figma, skillIcons.vscode],
    links: [
      { label: "기존 사이트", url: "https://www.daeguphoto.com/index.php" },
      { label: "리디자인", url: "https://biennale-web.vercel.app/" },
      { label: "Figma", url: "https://www.figma.com/design/rGOov9xNrSYaiGByM1Vobx/daegu-photo-biennale_redesign?node-id=0-1&t=PepEug4hMJc6g8Yv-1" },
      { label: "Notion", url: "https://app.notion.com/p/3817c519a23080c997b5ea6ef41d54f8?source=copy_link" },
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
    // description : 카드 UI 썸네일에 표시되는 내용, detail 설명이 없으면 Modal창에서도 description에 적힌 텍스트가 보여짐.
    description:
      "본 프로젝트는 행사 정보 전달과 참여 유도를 목적으로 하며, 포스터 및 전단에 분산되어 있는 정보를 하나의 랜딩페이지로 통합하여 사용자가 보다 직관적으로 혜택을 확인할 수 있도록 기획하였다.",
      detail: "",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.figma, skillIcons.photoshop, skillIcons.illustrator],
    links: [
      { label: "Figma", url: "https://www.figma.com/proto/rJqy5UMEqlFUIdoQXKIJQs/%EB%B0%B0%EC%9D%80%EC%A7%80_%EA%B3%A0%EB%9E%98%EC%9E%87-%ED%8E%98%EC%8A%A4%ED%83%80_%EB%9E%9C%EB%94%A9%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=105-1037&viewport=-11780%2C-1068%2C1.11&t=5nv4N1h3fzhyminO-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1" },
      { label: "Notion", url: "https://app.notion.com/p/3817c519a230805889cac0337a6defaf?source=copy_link" },
    ],
  },
  // 다음 프로젝트 추가 시 여기에 객체 추가
];