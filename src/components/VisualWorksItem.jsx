import { useState } from "react";
import ProjectModal from "./ProjectModal"; // 실제 경로에 맞게 수정해주세요
import "../css/VisualWorks.css";

function VisualWorkItem({ project }) {
  const { filename, thumbnail, title, period, tags, description, tools, links, large } =
    project;

  // 모달 열림 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
          {/* 썸네일 이미지 - 클릭 시 모달 오픈 */}
          <div
            className="project-img visualworks-img"
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <img src={thumbnail} alt={title} />
          </div>

          <div className="project-desc-wrap visual-desc-wrap">
            <div className="project-title-wrap">
              <h3>{title}</h3>
              <p>
                {period.start} - {period.end}
              </p>
            </div>

            <ul className="project-tag">
              {tags.map((tag) => (
                <li key={tag}>
                  <button>{tag}</button>
                </li>
              ))}
            </ul>

            <p className="project-desc">{description}</p>

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

      {/* 모달은 조건부 렌더링 */}
      {isModalOpen && (
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default VisualWorkItem;