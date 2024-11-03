import ParticlesComponent from "../particlesdark";
import ParticlesComponentDark from "../particleslight";
import logo from "../../assets/perfil.png";
import "./home.css";
import curriculo from "../../assets/DaviMurta.pdf";
import { Github, LinkedinIcon } from "lucide-react";
import PropTypes from 'prop-types';
const Home = ({ isSidebarClosed, isDarkMode }) => {
  return (
    <section id="home">
      <div className={`${'home'} ${isSidebarClosed ? "close" : ""} ${
        isDarkMode ? "dark" : ""
      }`}>
        <div className="home-text">
            <h1 className="text">Hello, It&apos;s Me</h1>
            <h2 className="text">Davi Murta</h2>
            <p className="text">
              And I&apos;m a <span>Fullstack Developer</span>
            </p>
          <div className="social-links">
            <ul className="social-icons">
              <li>
                <LinkedinIcon />
              </li>
              <li>
                <Github />
              </li>
            </ul>
          </div>
          <a href={curriculo} download="curriculo" className="home-button text">
            Download my CV
          </a>
        </div>
        <div className="perfil">
          <img src={logo} alt="" />
        </div>
      </div>
      {isDarkMode ? (<ParticlesComponent/>) : (<ParticlesComponentDark/>)}
    </section>
  );
};

Home.propTypes = {
  isSidebarClosed: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Home;
