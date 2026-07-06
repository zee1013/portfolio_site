import { skillIcons } from "./skills";

// public 폴더의 파일은 import 없이, 루트(/) 기준 문자열 경로로 바로 접근합니다.
const getThumbnail = (filename) => `/assets/project/${filename}`;

export const graduation = [
 {
  category: "photography",
  id: "photography",
  thumbnail: getThumbnail("photography.png"),
  title: "사이",
  period: {
    start: "24.12.05",
    end: "25.05.30",
  },
  tags: ["순수", "촬영"],
  description:
    "이 작업은 도시가 만든 '자연처럼 보이는 공간'을 관찰하는 시선에서 출발한다. 정돈된 나무의 배열, 산책로, 울타리, 빛과 그림자처럼 조형적인 요소를 통해 인공적으로 조성된 풍경 속 고요함과 낯섦을 기록했다.",
  tools: [skillIcons.photoshop],
  links: [{ label: "Notion", url: "https://app.notion.com/p/3827c519a2308132a8d5c34f60d22a51?source=copy_link" }], // 추가
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
      "본 애니메이션은 닌텐도의 다양한 게임기 시리즈 중 '닌텐도 스위치'를 중심으로 현실과 가상 세계를 오가며 닌텐도의 대표 게임 시리즈를 만나볼 수 있도록 구성하였다.",
    // skills.js에 정의된 skillIcons의 id를 재사용
    tools: [skillIcons.cinema4d, skillIcons.octane],
    links: [
      { label: "Youtube", url: "https://youtu.be/tgk0eT1ZaXo?si=PuJFpvR25Uy3slwo" },
      { label: "Notion", url: "https://app.notion.com/p/Nintendo-Switch-Animation-3827c519a23080508210dc7e0aaf3e7b?source=copy_link" }
    ],
  },
  // 다음 프로젝트 추가 시 여기에 객체 추가
];