import "./projects.css";
import "../../App.css";
import PropTypes from "prop-types";
import css from "../../assets/images/icons/css.svg";
import html from "../../assets/images/icons/html.svg";
import microsoft from "../../assets/images/icons/microsoft.svg";
import js from "../../assets/images/icons/js.svg";
import { useEffect, useState } from "react";
import { Link2 } from "lucide-react";

const Projects = ({ isSidebarClosed, isDarkMode }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erro ao carregar os projetos:", error));
  }, []);

  return (
    <section
      className={`${"project"} ${isSidebarClosed ? "close" : ""} ${
        isDarkMode ? "dark" : ""
      }`}
      id="projects"
    >
      <h2 className="heading">
        My <span>Projects</span>
      </h2>
      <div className="project-container">
        {projects.map((item) => {
          const { id, name, description, image } = item;
          return (
            <div key={id} className="project-bg">
              <div>
                <img
                  src={image}
                  alt="Imagem de um desktop e um smartphone com a foto do projeto operation smiles"
                />
              </div>
              <div className="project-content">
                <div className="project-text">
                  <h4>{name}</h4>
                  <p>{description}</p>

                  <a href="">Read more <Link2 /></a>
                </div>
                <div>
                  <ul className="wrapper">
                    <li className="icon css">
                      <span className="tooltip">CSS</span>
                      <span className="icons">
                        <img src={css} alt="css logo" />
                      </span>
                    </li>
                    <li className="icon html">
                      <span className="tooltip">HTML</span>
                      <span className="icons">
                        <img src={html} alt="html logo" />
                      </span>
                    </li>
                    <li className="icon js">
                      <span className="tooltip">JavaScript</span>
                      <span className="icons">
                        <img src={js} alt="js logo" />
                      </span>
                    </li>
                    <li className="icon pa">
                      <span className="tooltip">PowerApps</span>
                      <span className="icons">
                        <img src={microsoft} alt="microsoft logo" />
                      </span>
                    </li>
                    <li className="icon pp">
                      <span className="tooltip">PowerPages</span>
                      <span className="icons">
                        <img src={microsoft} alt="microsoft logo" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

Projects.propTypes = {
  isSidebarClosed: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Projects;
