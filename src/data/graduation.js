import { skillIcons } from "./skills";

// public 폴더의 파일은 import 없이, 루트(/) 기준 문자열 경로로 바로 접근합니다.
const getThumbnail = (filename) => `/assets/project/${filename}`;

export const graduation = [
 {
  category: "photography",
  id: "kosaf",
  thumbnail: getThumbnail("photography.png"),
  title: "사이",
  period: {
    start: "24.12.05",
    end: "25.05.30",
  },
  tags: ["순수", "촬영"],
  description:
    "장학금 페이지(서브 페이지) 전체 퍼블리싱을 담당하였으며, 다양한 디바이스 환경에서 일관된 사용자 경험을 제공할 수 있도록 반응형 웹 구조를 구현하였다.",
  tools: [skillIcons.figma, skillIcons.photoshop, skillIcons.vscode],
  links: [], // 추가
},
  {
    category: "motiongraphic",
    id: "motiongraphic",
    thumbnail: getThumbnail("motiongraphic.png"),
    title: "Nintendo 3D Animation",
    period: {
      start: "25.03.04",
      end: "25.04.17",
    },
    tags: ["영상", "모션그래픽"],
    description:
      "'닌텐도 스위치'를 중심으로 현실과 가상 세계를 오가며 닌텐도의 대표 게임 시리즈를 만나보세요.",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.cinema4d, skillIcons.octane],
    links: [
      { label: "Youtube", url: "#" }
    ],
  },
  // 다음 프로젝트 추가 시 여기에 객체 추가
];