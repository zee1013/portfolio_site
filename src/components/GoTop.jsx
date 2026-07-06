import { useState, useEffect } from "react";
import "../css/GoTop.css";

function GoTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scy = document.documentElement.scrollTop;
      setIsVisible(scy > 400); // 400px 이상 스크롤하면 버튼 보이기
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={isVisible ? "gotop-btn gotop-btn--visible" : "gotop-btn"}
      onClick={handleClick}
      aria-label="맨 위로 이동"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}

export default GoTop;