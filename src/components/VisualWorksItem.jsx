import "../css/VisualWorks.css";

function VisualWorkItem({ project }) {
  const { filename, thumbnail, title, period, tags, description, tools, links, large } =
    project;

  return (
    <div className={`finder-window ${large ? "finder-window--large" : ""}`}>
      {/* 맥 Finder 창 상단바 */}
      <div className="finder-titlebar">
        <div className="finder-dots">
          <span className="finder-dot finder-dot--red"></span>
          <span className="finder-dot finder-dot--yellow"></span>
          <span className="finder-dot finder-dot--green"></span>
        </div>
        <span className="finder-filename">{filename}</span>
      </div>

      {/* 창 내용 영역 */}
      <div className="finder-content">
        {/* 썸네일 이미지 */}
        <div className="project-img visualworks-img">
          <img src={thumbnail} alt={title} />
        </div>

        <div className="project-desc-wrap visual-desc-wrap">
          {/* 프로젝트 명, 기간 */}
          <div className="project-title-wrap">
            <h3>{title}</h3>
            <p>
              {period.start} ~ {period.end}
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

          {/* 프로젝트 링크 (프로세스 →) */}
          {links.length > 0 && (
            <ul className="project-links visual-links">
              {links.map((link) => (
                <li key={link.label} className="project-link-item">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </li>
              ))}
            </ul>
          )}

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
        </div>
      </div>
    </div>
  );
}

export default VisualWorkItem;