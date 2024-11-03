import "./skills.css";
import PropTypes from 'prop-types';

const Skills = ({ isSidebarClosed, isDarkMode }) => {
  return (
    <section
      className={`${"skills"} ${isSidebarClosed ? "close" : ""} ${
        isDarkMode ? "dark" : ""
      }`}
      id="skills"
    >
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-row">
        <div className="skills-column">
          <div>
            <h3 className="title">Coding Skills</h3>
          </div>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    HTML <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    CSS <span>80%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    JavaScript <span>65%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    Python <span>75%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="skills-column">
            <h3 className="title">Professional Skills</h3>

            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    Web Desing <span>95%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    Web Developmemt <span>67%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    Graphic Design <span>85%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>

                <div className="progress">
                  <h3>
                    SEO Marketing <span>60%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

Skills.propTypes = {
  isSidebarClosed: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Skills;
