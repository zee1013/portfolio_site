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
        <div className="app-project-images-bleed">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${title} 화면 ${i + 1}`}
              className={`app-project-img app-project-img--${i}`}
            />
          ))}
        </div>
      </div>

      {/* 텍스트 정보 */}
      <div className="app-project-info">
        <span className="app-project-number">{number}</span>
        <h3 className="app-project-title">{title}</h3>
        <p className="app-project-period">
          {period.start} - {period.end}
        </p>

        <ul className="app-project-tags">
          {tags.map((tag) => (
            <button key={tag} className="app-project-tag">
              {tag}
            </button>
          ))}
        </ul>

        <p className="app-project-desc">{description}</p>

        <div className="app-project-tools">
          <p className="app-tool-title">Tool</p>
          <ul className="app-tool-list">
            {tools.map((tool) => (
              <li key={tool.id} className="app-tool-item">
                <img src={tool.icon} alt={tool.name} />
              </li>
            ))}
          </ul>
        </div>

        <ul className="app-project-links">
          {links.map((link) => (
            <li key={link.label} className="app-project-link-item">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label} →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppProjectItem;