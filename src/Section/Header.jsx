import "../css/Header.css";
import { useState, useEffect } from "react";

// 네비게이션 메뉴 목록입니다. label은 화면에 보이는 글자, id는 스크롤할 섹션의 id값입니다.
const NAV_ITEMS = [
  { label: "ABOUT", id: "about" },
  { label: "WEB", id: "web" },
  { label: "APP", id: "app" },
  { label: "VISUAL WORKS", id: "visual" },
  { label: "EXHIBITION", id: "exhibition" },
  { label: "CODING", id: "coding" },
];

function Header() {
  // 지금 클릭된(활성화된) 메뉴를 useState로 관리합니다.
  const [activeId, setActiveId] = useState("about");
  // 스크롤을 내렸는지 여부를 useState로 관리합니다.
  const [isScrolled, setIsScrolled] = useState(false);
  // 모바일 메뉴가 열려있는지 여부를 useState로 관리합니다.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 스크롤 이벤트: 스크롤을 내리면 헤더 색을 바꿉니다.
  useEffect(() => {
    const handleScroll = () => {
      const scy = document.documentElement.scrollTop;
      setIsScrolled(scy > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // 모바일 메뉴 열렸을 때 배경 스크롤 막기
useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  // 컴포넌트 언마운트 시 원상복구
  return () => {
    document.body.style.overflow = "";
  };
}, [isMenuOpen]);

  const handleNavClick = (id) => {
    setActiveId(id);
    setIsMenuOpen(false); // 메뉴 클릭 시 모바일 메뉴 닫기
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToggleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={isScrolled || isMenuOpen ? "header header--active" : "header"}>
      <div className="inner">
        {/* 768px 이하에서만 보이는 햄버거 버튼 */}
        <div
          className={
            isMenuOpen ? "header__toggle header__toggle--active" : "header__toggle"
          }
          onClick={handleToggleClick}
          aria-label="메뉴 열기"
        >
          <span className="header__toggle-bar"></span>
          <span className="header__toggle-bar"></span>
          <span className="header__toggle-bar"></span>
        </div>

        <nav>
          <ul
            className={
              isMenuOpen ? "header__nav header__nav--open" : "header__nav"
            }
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  className={
                    activeId === item.id
                      ? "header__nav-btn header__nav-btn--active"
                      : "header__nav-btn"
                  }
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;