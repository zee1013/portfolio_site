import { useEffect } from "react";
import "../css/ProjectModal.css";

function ProjectModal({ project, onClose }) {
    const { thumbnail, title, period, tags, description, detail, tools, links } = project;
    // 모달에는 긴 상세 설명(detail)을 우선 보여주고, 아직 없는 프로젝트는 짧은 설명(description)으로 대체
    const modalDesc = detail || description;

    // ESC 키로 닫기 + 모달 열려있는 동안 배경 스크롤 막기
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    // 오버레이(배경) 클릭 시 닫기
    const handleOverlayClick = () => onClose();
    // 모달 콘텐츠 클릭은 오버레이로 전파되지 않도록 차단 (닫힘 방지)
    const handleContentClick = (e) => e.stopPropagation();

    return (
        <div className="project-modal-overlay" onClick={handleOverlayClick}>
            <div className="project-modal" onClick={handleContentClick}>
                <button
                    type="button"
                    className="project-modal-close"
                    onClick={onClose}
                    aria-label="닫기"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="project-modal-img">
                    <img src={thumbnail} alt={title} />
                </div>

                <div className="project-modal-body">
                    <div className="project-modal-title-wrap">
                        <h3>{title}</h3>
                        <p>
                            {period.start} - {period.end}
                        </p>
                    </div>

                    <ul className="project-modal-tag">
                        {tags.map((tag) => (
                            <li key={tag}>
                                <button type="button">{tag}</button>
                            </li>
                        ))}
                    </ul>

                    <p className="project-modal-desc">{modalDesc}</p>

                    <div className="project-modal-tools">
                        <p className="tool-title">Tool</p>
                        <ul className="tool-list">
                            {tools.map((tool) => (
                                <li key={tool.id} className="tool-item">
                                    <img src={tool.icon} alt={tool.name} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ul className="project-modal-links">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
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

export default ProjectModal;