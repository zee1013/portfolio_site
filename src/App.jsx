import "./index.css";
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
            <Header/>
            <Hero/>
            <About/>
            <Web/>
            <AppDesign/>
            <VisualWorks/>
            <Graduation/>
            <Coding/>
            <Contact/>
        </div>
    )
}
export default App;