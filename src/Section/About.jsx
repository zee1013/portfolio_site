import { skillGroups } from "../data/skills";
import "../css/About.css";

function About() {
  return (
    <>
      <section className="about">
        <div className="inner">
          <div className="about-title">
            <h1>About Me</h1>
          </div>
          <div className="about-content-wrap">
            {/* 왼쪽 프로필 박스 */}
            <div className="profile-box">
               <img src="/assets/about/profile.png" alt="Profile" />
              <h3>
                관찰을 통해 문제를 <strong>발견</strong>하고,
                <br />
                디자인으로 <strong>해결</strong>하며,
                <br />
                코드로 <strong>구현</strong>합니다.
              </h3>
            </div>

            {/* 중간 개인정보 박스 */}
            <div className="about-middle-box">
              <div className="middle-profile">
                <h2>PROFILE</h2>
                <p>
                  배은지
                  <br />
                  2001.10.13
                </p>
              </div>
              <div className="middle-contact">
                <h2>CONTACT</h2>
                <p><i class="fa-solid fa-mobile-screen-button"></i>010-7193-1251</p>
                <p><i class="fa-regular fa-envelope"></i>dmswl1251@gmail.com</p>
                <div className="middle-link">
                  <p><i class="fa-brands fa-github"></i>
                    <a
                      href="https://github.com/zee1013"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </a>
                  </p>
                  <p><i class="fa-brands fa-notion"></i>
                    <a href="#">notion</a>
                  </p>
                </div>
              </div>
            </div>

            {/* 오른쪽 학력/자격증 박스 */}
            <div className="about-right-box">
              <div className="right-education">
                <h2>EDUCATION</h2>
                <ul className="education-list">
                  <li>
                    <p>
                      (디지털디자인) AI도구 활용 사용자 중심 UI/UX
                      <br />
                      디자인 및 프로토타이핑(FigmaAI, ChatGPT)
                    </p>
                    <span>26.02 - 26.07 그린컴퓨터아트학원</span>
                  </li>
                  <li>
                    <p>계명대학교 사진영상디자인과</p>
                    <span>21.03 - 26.02</span>
                  </li>
                  <li>
                    <p>경산여자고등학교</p>
                    <span>17.03 - 20.02</span>
                  </li>
                </ul>
              </div>
              <div className="right-license">
                <h2>LICENSE</h2>
                <ul className="license-list">
                  <li>
                    <p>GTQ(그래픽기술자격)2급</p>
                    <span>21.08 한국생산성본부</span>
                  </li>
                  <li>
                    <p>운전면허 2종 보통</p>
                    <span>21.08 경찰청</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-skills">
            <h2>SKILLS</h2>
            <ul className="skills">
              {skillGroups.map((group) => (
                <li key={group.id} className="skill-group">
                  <button type="button" className="skill-category-btn">
                    {group.label}
                  </button>

                  <ul className="skill-icon-list">
                    {group.skills.map((skill) => (
                      <li key={skill.id} className="skill-icon-item">
                        <img src={skill.icon} alt={skill.name} />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;