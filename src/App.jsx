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

function App(){
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
        </div>
    )
}
export default App;