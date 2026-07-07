import { useState } from "react";
import { createPortal } from "react-dom";
import ProjectModal from "./ProjectModal";
import "../css/CardUi.css";

function CardUi({ project }) {
    const { thumbnail, title, period, tags, description, tools, links } = project;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // 카드 안의 링크를 눌렀을 때 모달이 같이 열리지 않도록 전파 차단
    const handleLinkClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <div className="project-card" onClick={openModal}>
                {/* 썸네일 이미지 */}
                <div className="project-img">
                    <img src={thumbnail} alt={title} />
                </div>

                <div className="project-desc-wrap">
                    {/* 프로젝트 명, 기간 */}
                <div className="project-title-wrap">
                    <h3>{title}</h3>
                    <p>{period.start} - {period.end}</p>
                </div>

                {/* 작업 태그 */}
                <ul className="project-tag">
                    {tags.map((tag)=>(
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
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleLinkClick}
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

            {isModalOpen &&
                createPortal(
                    <ProjectModal project={project} onClose={closeModal} />,
                    document.body
                )}
        </>
    )
}
export default CardUi;