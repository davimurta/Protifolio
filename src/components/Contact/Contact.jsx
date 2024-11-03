import { useState } from "react";
import "./contact.css";
import PropTypes from "prop-types";

const Contact = ({ isDarkMode }) => {
    const [telefone, setTelefone] = useState('');

    const mascaraTelefone = (value) => {
        // Remove caracteres não numéricos
        value = value.replace(/\D/g, '');

        // Aplica a máscara
        if (value.length <= 10) {
            return value.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3'); // Ex: (99) 9999-9999
        } else {
            return value.replace(/(\d{2})(\d{5})(\d+)/, '($1) $2-$3'); // Ex: (99) 99999-9999
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const maskedValue = mascaraTelefone(value);
        setTelefone(maskedValue);
    };

  return (
    <section
      className={`${"contact"} ${
        isDarkMode ? "dark" : ""
      }`}
      id="contact"
    >
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>

      <form action="#">
        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Email Address" required />
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
          <input
                type="text"
                id="telefone"
                value={telefone}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
            />
          </div>
          <div className="input-field">
            <input type="text" placeholder="Email Subject" required />
          </div>
        </div>

        <div className="textarea-field">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your massage"
            required
          ></textarea>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

Contact.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
  };

export default Contact;
