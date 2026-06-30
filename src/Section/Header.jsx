import "../css/Header.css";
import { useState } from "react";

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

  const handleNavClick = (id) => {
    setActiveId(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="inner">
        <nav>
          <ul className="header__nav">
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
