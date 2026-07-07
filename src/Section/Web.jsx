import { projects } from "../data/projectData.js";
import CardUi from "../components/CardUi.jsx";
import "../css/Web.css";

function Web() {
  return <>
  <section className="web" id="web">
    <div className="web-line">
      <img src="/assets/decoration/line-2.png" alt="" />
    </div>
    <div className="inner">
        <h1>Web Design & Publishing</h1>
        <div className="project-wrap">
            {projects.map((project) => (
                <CardUi key={project.id} project={project} />
            ))}
        </div>
    </div>
    </section>
  </>;
}
export default Web;
