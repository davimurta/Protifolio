/* eslint-disable react/prop-types */
import {
  AlignJustify,
  Briefcase,
  House,
  LayoutGrid,
  Mail,
  Menu,
  Moon,
  Route,
  Sun,
  X,
} from "lucide-react";

import "./header.css";

const Header = ({
  isSidebarClosed,
  toggleSidebar,
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <>
      <div className={`body ${isDarkMode ? "dark" : ""} header`}>
        <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
          <header>
            <div className="image-text">
              <span className="image">
                <img
                  id="logo"
                  src={isDarkMode ? "DaviMurtaDark.svg" : "DaviMurtaLight.svg"}
                  alt="Logo"
                />
              </span>
              <div className="text logo-text">
                <span className="name">Davi Murta</span>
                <span className="profession">Web Developer</span>
              </div>
            </div>
            <div className="open toggle" onClick={toggleSidebar}>
              {isSidebarClosed ? <AlignJustify /> : <X />}
            </div>
          </header>

          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#home">
                    <House className="icon" />
                    <span className="text nav-text">Home</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#projects">
                    <LayoutGrid className="icon" />
                    <span className="text nav-text">Projects</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#track">
                    <Route className="icon" />
                    <span className="text nav-text">Journey</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#skills">
                    <Briefcase className="icon" />
                    <span className="text nav-text">Skills</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#contact">
                    <Mail className="icon" />
                    <span className="text nav-text">Talk to me</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bottom-content">
              <li className="mode">
                <div className="sun-moon">
                  {isDarkMode ? (
                    <Sun className="icon" opacity={isSidebarClosed ? 0 : 1} />
                  ) : (
                    <Moon className="icon" opacity={isSidebarClosed ? 0 : 1} />
                  )}
                </div>
                <span className="mode-text text">
                  {isDarkMode ? "Light mode" : "Dark mode"}
                </span>
                <div className="toggle-switch" onClick={toggleDarkMode}>
                  <span className="switch"></span>
                </div>
              </li>
            </div>
          </div>
        </nav>
      </div>
      <div className="cellphoneMenu">
        <div className="cellMenuContainer">
          <Menu className="iconCell" />
        </div>
      </div>
    </>
  );
};

export default Header;
