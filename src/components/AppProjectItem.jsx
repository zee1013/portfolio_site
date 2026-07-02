import "../css/AppDesign.css";

function AppProjectItem({ project, index }) {
  const { number, title, images, period, tags, description, tools, links } =
    project;

  // index가 홀수면 이미지-텍스트 위치를 반전 (짝수번째 항목: 02, 04...)
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`app-project-item ${
        isReversed ? "app-project-item--reversed" : ""
      }`}
    >
      {/* 폰 목업 이미지 (박스보다 크게 만들어서 화면 끝에서 잘리게 함) */}
      <div className="app-project-images">
        {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${title} 화면 ${i + 1}`}
              className={`app-project-img app-project-img--${i}`}
            />
          ))}
      </div>

      {/* 텍스트 정보 */}
      <div className="project-desc-wrap app">
        {/* 프로젝트 명, 기간 */}
          <span className="app-project-number">{number}</span>
        <div className="project-title-wrap">
          <h3>{title}</h3>
          <p>
            {period.start} - {period.end}
          </p>
        </div>

        {/* 작업 태그 */}
        <ul className="project-tag">
          {tags.map((tag) => (
            <li key={tag}>
              <button>{tag}</button>
            </li>
          ))}
        </ul>

        {/* 프로젝트 간단 설명 */}
        <p className="project-desc">{description}</p>

        {/* 사용툴 + 프로젝트 링크 박스 */}
        <div className="project-info-wrap">
          {/* 사용 툴 아이콘 */}
          <div className="project-tools">
            <p className="tool-title">Tool</p>
            <ul className="tool-list">
              {tools.map((tool) => (
                <li key={tool.id} className="tool-item">
                  <img src={tool.icon} alt={tool.name} />
                </li>
              ))}
            </ul>
          </div>

          {/* 프로젝트 링크 */}
          <ul className="project-links">
            {links.map((link) => (
              <li key={link.label} className="project-link-item">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AppProjectItem;