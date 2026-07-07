import CardUi from "../components/CardUi";
import { coding } from "../data/coding";
import "../css/Coding.css"

function Coding() {
    return (
        <>
        <section className="coding-wrap" id="coding">
            <div className="inner">
                <h1 data-aos="fade-up">Coding</h1>
                <div className="project-wrap">
                    {coding.map((project, index)=>(
                        <div
                          key={project.id}
                          data-aos="fade-up"
                          data-aos-delay={index * 100}
                        >
                          <CardUi project={project}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}
export default Coding;