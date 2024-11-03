import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Track from "../Track/Track";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import "./info.css";
import PropTypes from 'prop-types';

const Info = ({ isSidebarClosed, isDarkMode }) => {
  
  return (
    <>
      <main>
        <Home isSidebarClosed={isSidebarClosed} isDarkMode={isDarkMode} />
        <Projects isSidebarClosed={isSidebarClosed} isDarkMode={isDarkMode} />
        <Track isSidebarClosed={isSidebarClosed} isDarkMode={isDarkMode} />
        <Skills isSidebarClosed={isSidebarClosed} isDarkMode={isDarkMode} />
        <Contact isSidebarClosed={isSidebarClosed} isDarkMode={isDarkMode} />
        <Footer isSidebarClosed={isSidebarClosed} isDarkMode={isDarkMode} />
      </main>
    </>
  );
};

Info.propTypes = {
  isSidebarClosed: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Info;
