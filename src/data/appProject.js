import { skillIcons } from "./skills";

// 앱 프로젝트용 폰 목업 이미지들을 한번에 불러옵니다.
// (assets/app_design 폴더에 폰 스크린샷/목업 이미지를 모아두는 걸 가정)
const appImageModules = import.meta.glob("/public/assets/app_design/*.png", {
  eager: true,
});

const getAppImage = (filename) => {
  const key = `/public/assets/app_design/${filename}`;
  return appImageModules[key]?.default;
};

export const appProjects = [
  {
    id: "planti",
    number: "01",
    title: "PLANTI",
    // 폰이 여러 장 겹쳐진 경우 배열로 관리 (뒤에 있는 이미지부터 순서대로)
    images: [getAppImage("planti.png")],
    period: {
      start: "26.05.12",
      end: "26.06.12",
    },
    tags: ["개인 프로젝트", "APP UI"],
    description:
      "Planti는 사용자가 하루동안 느낀 감정과 루틴을 부담없이 기록할 수 있도록 돕는 감정 기록 앱이다. 기존 기록 서비스의 낮은 지속성과 기록 피로도 문제를 해결하고자 기획되었으며, 사용자가 자신의 감정과 일상을 자연스럽게 돌아보며 기록 습관을 형성할 수 있는 경험을 제공한다.",
    tools: [skillIcons.figma, skillIcons.illustrator],
    links: [
      { label: "Figma", url: "https://www.figma.com/proto/U7hpXJPn9bKmb70rGCWWop/planti_app_design?node-id=1-3&viewport=87%2C192%2C0.3&t=nk9svcbS9UeNZiDu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
      { label: "Notion", url: "https://app.notion.com/p/App-UI-Planti-3817c519a23080da8b4ef589d38b2975?source=copy_link" },
    ],
  },
  {
    id: "popho",
    number: "02",
    title: "POPHO",
    images: [getAppImage("popho.png")],
    period: {
      start: "23.10.06",
      end: "23.12.12",
    },
    tags: ["팀 프로젝트(4인)", "기획", "APP UI"],
    description:
      "Popho 프로젝트는 스마트기기 사용자를 대상으로 사용자의 환경에 맞춰 실시간 날씨와 온도를 연동하여 기본적인 사진 촬영 기법을 알려주는 'Popho'어플리케이션 개발 프로젝트이다.",
    tools: [skillIcons.photoshop, skillIcons.illustrator],
    links: [
      { label: "Notion", url: "https://app.notion.com/p/3817c519a2308079b3e9de11bdc8328c?source=copy_link" },
    ],
  },
  // 다음 앱 프로젝트 추가 시 여기에 객체 추가
];