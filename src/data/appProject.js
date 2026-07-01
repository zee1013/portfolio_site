import { skillIcons } from "./skills";

// 앱 프로젝트용 폰 목업 이미지들을 한번에 불러옵니다.
// (assets/app 폴더에 폰 스크린샷/목업 이미지를 모아두는 걸 가정)
const appImageModules = import.meta.glob("../public/assets/app/*.png", {
  eager: true,
});

const getAppImage = (filename) => {
  const key = `../public/assets/app/${filename}`;
  return appImageModules[key]?.default;
};

export const appProjects = [
  {
    id: "planti",
    number: "01",
    title: "PLANTI",
    // 폰이 여러 장 겹쳐진 경우 배열로 관리 (뒤에 있는 이미지부터 순서대로)
    images: [getAppImage("planti_mockup1.png"), getAppImage("planti_mockup.png")],
    period: {
      start: "26.05.12",
      end: "26.06.12",
    },
    tags: ["개인 프로젝트", "APP UI"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convincere honeste industria sint debemus, periculis ullius indoctum. Legantur disserendum consectetur adipiscing elit. Convincere honeste industria sint debemus, periculis ullius indoctum. Legantur disserendum",
    tools: [skillIcons.figma, skillIcons.photoshop, skillIcons.illustrator],
    links: [
      { label: "Figma", url: "#" },
      { label: "Notion", url: "#" },
    ],
  },
  {
    id: "popho",
    number: "02",
    title: "POPHO",
    images: [getAppImage("popho_mockup.png")],
    period: {
      start: "23.10.06",
      end: "23.12.12",
    },
    tags: ["팀 프로젝트(4인)", "기획", "APP UI"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convincere honeste industria sint debemus, periculis ullius indoctum. Legantur disserendum consectetur adipiscing elit. Convincere honeste industria sint debemus, periculis ullius indoctum. Legantur disserendum",
    tools: [skillIcons.photoshop, skillIcons.illustrator],
    links: [
      { label: "Figma", url: "#" },
      { label: "Notion", url: "#" },
    ],
  },
  // 다음 앱 프로젝트 추가 시 여기에 객체 추가
];