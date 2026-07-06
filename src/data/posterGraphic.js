// 포스터 (세로형) 이미지들
const posterTallImageModules = import.meta.glob(
  "/public/assets/poster_graphic/tall/*.{png,jpg,jpeg}",
  { eager: true }
);
const getPosterTallImage = (filename) => {
  const key = `/public/assets/poster_graphic/tall/${filename}`;
  return posterTallImageModules[key]?.default;
};

// 정사각형(1:1) 이미지들
const posterSquareImageModules = import.meta.glob(
  "/public/assets/poster_graphic/square/*.{png,jpg,jpeg}",
  { eager: true }
);
const getPosterSquareImage = (filename) => {
  const key = `/public/assets/poster_graphic/square/${filename}`;
  return posterSquareImageModules[key]?.default;
};

export const posterTallWorks = [
  { id: "tall-1", image: "/assets/poster_graphic/tall/sprite.png", alt: "스프라이트 포스터" },
  { id: "tall-2", image: "/assets/poster_graphic/tall/ice-tea.png", alt: "아이스티오 포스터" },
  { id: "tall-4", image: "/assets/poster_graphic/tall/tamburins-2.png", alt: "포스터 4" },
  { id: "tall-3", image: "/assets/poster_graphic/tall/tamburins-1.png", alt: "포스터 3" },
  { id: "tall-5", image: "/assets/poster_graphic/tall/tamburins-3.png", alt: "포스터 5" },
  { id: "tall-6", image: "/assets/poster_graphic/tall/tamburins-4.png", alt: "포스터 6" },
];

export const posterSquareWorks = [
  { id: "square-1", image: "/assets/poster_graphic/square/ohouse.png", alt: "오늘의집 집요한세일" },
  { id: "square-2", image: "/assets/poster_graphic/square/square2.jpg", alt: "그래픽 2" },
  { id: "square-3", image: "/assets/poster_graphic/square/square3.jpg", alt: "그래픽 3" },
  { id: "square-4", image: "/assets/poster_graphic/square/square4.jpg", alt: "그래픽 4" },
  { id: "square-5", image: "/assets/poster_graphic/square/square5.jpg", alt: "그래픽 5" },
];