import { useEffect } from "react";
import { createPortal } from "react-dom";
import "../css/ProjectModal.css";

function ProjectModal({ project, onClose }) {
    const { thumbnail, title, period, tags, description, detail, detailImage,tools, links } = project;
    const modalDesc = detail || description;

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

    const handleOverlayClick = () => onClose();
    const handleContentClick = (e) => e.stopPropagation();

    // 모달 JSX를 변수로 분리
    const modalContent = (
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

                    {/* 프로세스 이미지가 있을 때만 렌더링 */}
{detailImage && (
    <div className="project-modal-detail-img">
        <img src={detailImage} alt={`${title} 프로세스`} />
    </div>
)}

                </div>
            </div>
        </div>
    );

    // document.body에 직접 렌더링 (부모의 transform/overflow 영향을 받지 않음)
    return createPortal(modalContent, document.body);
}

export default ProjectModal;