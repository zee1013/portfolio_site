import { graduation } from "../data/graduation";
import CardUi from "../components/CardUi";
import "../css/Graduation.css"

function Graduation() {
    return (
        <>
        <section className="graduation-wrap" id="exhibition">
            <div className="inner">
                <h1 data-aos="fade-up">Graduation Project</h1>
                <div className="project-wrap">
                    {graduation.map((project, index)=>(
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
export default Graduation;