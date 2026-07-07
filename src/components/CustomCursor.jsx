import { useEffect, useRef } from "react";
import "../css/CustomCursor.css";

function CustomCursor() {
    const ringRef = useRef(null);
    const mousePos = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const moveCursor = (e) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
        };

        // 클릭 가능한 요소 위에 있을 때 커서 확대
        const handleMouseOver = (e) => {
            const target = e.target.closest(
                "a, button, .project-card, .skill-category-btn, [role='button'], input, textarea"
            );
            ringRef.current?.classList.toggle("is-hovering", !!target);
        };

        const handleMouseDown = () => {
            ringRef.current?.classList.add("is-clicking");
        };
        const handleMouseUp = () => {
            ringRef.current?.classList.remove("is-clicking");
        };

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // 링(ring)은 requestAnimationFrame으로 부드럽게 따라오도록 보간(lerp) 처리
        let animationFrameId;
        const animateRing = () => {
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;
            if (ringRef.current) {
                ringRef.current.style.transform =
                    `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
            }
            animationFrameId = requestAnimationFrame(animateRing);
        };
        animationFrameId = requestAnimationFrame(animateRing);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <div ref={ringRef} className="custom-cursor-ring" />;
}

export default CustomCursor;