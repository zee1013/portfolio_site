import CardUi from "../components/CardUi";
import { coding } from "../data/coding";
import "../css/Coding.css"

function Coding() {
    return (
        <>
        <section className="coding-wrap" id="coding">
            <div className="inner">
                <h1>Coding</h1>
                <div className="project-wrap">
                    {coding.map((project)=>(
                        <CardUi key={project.id} project={project}/>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}
export default Coding;