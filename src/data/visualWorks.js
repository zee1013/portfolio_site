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
      "빵지도는 다양한 베이커리와 디저트 정보를 한곳에서 탐색할 수 있는 지도 기반 플랫폼이다. 빵이 나오는 시간, 재고, 웨이팅 등 방문 전 필요한 정보를 제공하고, 예약 및 픽업까지 연결되는 통합 서비스이다.",
    tools: [skillIcons.figma, skillIcons.illustrator],
    links: [{ label: "프로세스", url: "https://www.figma.com/proto/6H9U6plOBNNu38nyO1yLag/Untitled?node-id=1-5&viewport=505%2C353%2C0.15&t=JmaSEHZl9xSFVVkD-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" },{ label: "Notion", url: "https://app.notion.com/p/3817c519a23080859f1cf4b71c45e5df?source=copy_link" }],
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
      "휩드(WHIPPED)의 딸바 팩 클렌저를 주제로 상세페이지를 리디자인한 프로젝트이다. 제품의 특징을 살린 콘셉트를 시각적으로 강조하여 브랜드 무드를 강화하고, 사용 방법과 제품 특징을 직관적으로 이해할 수 있도록 구성하였다.",
    tools: [skillIcons.illustrator, skillIcons.photoshop],
    links: [{ label: "기존 상세페이지", url: "https://whipped.co.kr/product/%ED%9C%A9%EB%93%9C-%EB%94%B8%EB%B0%94-%EB%B9%84%EA%B1%B4-%ED%8C%A9%ED%81%B4%EB%A0%8C%EC%A0%80-130g/55/category/54/display/1/" },{ label: "카페24", url: "https://forji1013.cafe24.com/product/%EC%83%9D%EA%B8%B0%EC%B6%A9%EC%A0%84-%ED%9C%A9%EB%93%9C-%EB%94%B8%EB%B0%94-%EB%B9%84%EA%B1%B4-%ED%8C%A9%ED%81%B4%EB%A0%8C%EC%A0%80/11/category/42/display/1/" }, { label: "Notion", url: "https://app.notion.com/p/3817c519a2308021a572c4f8d2022290?source=copy_link" }],
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
      "ODD는 정돈된 환경 속에서도 자신만의 취향을 놓치지 않는 사람들을 위한 데스크 라이프스타일 브랜드이다. 브랜드 기획부터 네이밍, 로고 디자인, 제품 기획, 브랜드 아이덴티티 구축, 쇼핑몰 디자인까지 전 과정을 진행했다.",
    tools: [skillIcons.illustrator, skillIcons.photoshop],
    links: [{ label: "카페24", url: "https://forji1013.cafe24.com" }, { label: "Notion", url: "https://app.notion.com/p/24-ODD-3827c519a23080839f2cd85dc8f90d93?source=copy_link" }],
    large: false,
  },
  // 다음 비주얼 작업물 추가 시 여기에 객체 추가
];