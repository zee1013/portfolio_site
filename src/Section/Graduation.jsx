import { graduation } from "../data/graduation";
import CardUi from "../components/CardUi";
import "../css/Graduation.css"

function Graduation() {
    return (
        <>
        <section className="graduation-wrap" id="exhibition">
            <div className="inner">
                <h1>Graduation Project</h1>
                <div className="project-wrap">
                    {graduation.map((project)=>(
                        <CardUi key={project.id} project={project}/>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}
export default Graduation;