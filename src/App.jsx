import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import "./App.css"
import "../src/css/Animation.css"
import About from "./Section/About";
import AppDesign from "./Section/AppDesign";
import Coding from "./Section/Coding";
import Contact from "./Section/Contact";
import Graduation from "./Section/Graduation";
import Header from "./Section/Header";
import Hero from "./Section/Hero";
import VisualWorks from "./Section/VisualWorks";
import Web from "./Section/Web";
import GoTop from "./components/GoTop";

function App(){
    useEffect(() => {
    AOS.init({
      duration: 800,   // 애니메이션 지속시간(ms)
      once: true,      // 한 번만 실행 (스크롤 올려도 재실행 안 함)
      offset: 100,     // 트리거 시작 지점 (px)
    });
  }, []);
    return(
        <div>
            {/* 헤더 */}
            <Header/>
            {/* 메인 화면 */}
            <Hero/>
            {/* 소개 */}
            <About/>
            {/* 웹 디자인 영역 */}
            <Web/>
            {/* 앱 디자인 영역 */}
            <AppDesign/>
            {/* 웹/앱 제외 디자인 */}
            <VisualWorks/>
            {/* 졸업 전시 */}
            <Graduation/>
            {/* 클론 코딩 연습 */}
            <Coding/>
            {/* 콘택트 영역 */}
            <Contact/>
            {/* gotop 버튼 */}
            <GoTop/>
        </div>
    )
}
export default App;