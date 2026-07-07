import { appProjects } from "../data/appProject";
import AppProjectItem from "../components/AppProjectItem";
import "../css/AppDesign.css";

function AppSection() {
  return (
    <section className="app-section" id="app">
      <div className="app-line">
        <img src="/assets/decoration/line-3.png" alt="" />
      </div>

      {/* 반짝이는 sparkle 데코 3개 */}
      <div className="app-sparkle-wrap">
        <div className="sparkle-img" id="app-sparkle-1">
          <img src="/assets/decoration/sparkle-big.png" alt="" className="sparkle-ani" />
        </div>
        <div className="sparkle-img" id="app-sparkle-2">
          <img src="/assets/decoration/sparkle-big.png" alt="" className="sparkle-ani" />
        </div>
        <div className="sparkle-img" id="app-sparkle-3">
          <img src="/assets/decoration/sparkle-big.png" alt="" className="sparkle-ani" />
        </div>
      </div>

        <div className="inner">
            <h1 className="appDesign-title">App Design</h1>

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