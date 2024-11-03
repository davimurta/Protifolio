import "./footer.css";
import PropTypes from "prop-types";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`${"footer"} ${
      isDarkMode ? "dark" : ""
    }`}>
      <p>© 2024 Made by Davi Murta</p>
    </footer>
  )
}

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Footer
