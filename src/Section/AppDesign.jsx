import { appProjects } from "../data/appProject";
import AppProjectItem from "../components/AppProjectItem";
import "../css/AppDesign.css";

function AppSection() {
  return (
    <section className="app-section">
        <div className="inner">
            <h2 className="app-section-title">APP DESIGN</h2>

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