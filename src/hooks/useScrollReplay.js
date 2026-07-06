import { useEffect, useRef, useState } from "react";

// 요소가 화면에 보일 때마다 true/false를 반복 토글해주는 훅
function useScrollReplay(threshold = 0.3) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); // 먼저 껐다가
          requestAnimationFrame(() => {
            setIsVisible(true); // 다음 프레임에 다시 켜서 애니메이션 재시작
          });
        } else {
          setIsVisible(false); // 화면에서 벗어나면 초기화
        }
      },
      { threshold }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

export default useScrollReplay;