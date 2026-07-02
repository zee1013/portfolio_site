import { skillIcons } from "./skills";

// 비주얼 작업물용 썸네일 이미지들을 한번에 불러옵니다.
// (assets/visual_works 폴더에 이미지를 모아두는 걸 가정)
const visualImageModules = import.meta.glob("/public/assets/visual_works/*.{png,jpg,jpeg}", {
  eager: true,
});

const getVisualImage = (filename) => {
  const key = `/public/assets/visual_works/${filename}`;
  return visualImageModules[key]?.default;
};

export const visualWorks = [
  {
    id: "bread-map",
    filename: "빵지도.psd",
    thumbnail: getVisualImage("bread_map.png"),
    title: "빵지도",
    period: {
      start: "26.05.12",
      end: "26.06.12",
    },
    tags: ["브랜딩"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convincere honeste industria sint debemus, periculis ullius indoctum. Legantur disserendum",
    tools: [skillIcons.figma, skillIcons.illustrator],
    links: [{ label: "프로세스", url: "#" },{ label: "Notion", url: "#" }],
    large: true,
  },
  {
    id: "whipped",
    filename: "휘핑.ai",
    thumbnail: getVisualImage("whipped.png"),
    title: "WHIPPED",
    period: {
      start: "26.05.12",
      end: "26.06.12",
    },
    tags: ["상세페이지"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convincere honeste industria sint debemus, periculis ullius indoctum. Legantur disserendum",
    tools: [skillIcons.illustrator, skillIcons.photoshop],
    links: [{ label: "기존 상세페이지", url: "#" },{ label: "카페24", url: "#" }],
    large: false,
  },
  {
    id: "odd",
    filename: "ODD.png",
    thumbnail: getVisualImage("ODD.png"),
    title: "ODD",
    period: {
      start: "26.05.12",
      end: "26.06.12",
    },
    tags: ["카페24"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convincere honeste industria sint debemus, periculis ullius indoctum. Legantur disserendum",
    tools: [skillIcons.illustrator, skillIcons.photoshop],
    links: [{ label: "카페24", url: "#" }, { label: "Notion", url: "#" }],
    large: false,
  },
  // 다음 비주얼 작업물 추가 시 여기에 객체 추가
];