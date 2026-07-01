import { appProjects } from "../data/appProject";
import AppProjectItem from "../components/AppProjectItem";
import "../css/AppDesign.css";

function AppSection() {
  return (
    <section className="app-section">
        <div className="inner">
            <h1>APP DESIGN</h1>

      <div className="app-project-list">
        {appProjects.map((project, index) => (
          <AppProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
        </div>
    </section>
  );
}

export default AppSection;