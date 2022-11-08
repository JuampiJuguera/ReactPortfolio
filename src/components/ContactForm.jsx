import React from "react";
import "../styles/Contact.scss";

// TODO: https://react-hook-form.com/ migrar
const ContactForm = () => {
  return (
    <form className="contact__container">
      <label name="name"></label>
      <input
        type="name"
        id="name"
        name="name"
        placeholder="Enter your name"
        className="contact__container-form"
      />
      <label name="email"></label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="contact__container-form"
      />
      <label name="textbox"></label>
      <textarea
        className="contact__container-text"
        type="textarea"
        id="textbox"
        name="textbox"
        placeholder="Enter your text"
      />
      <button type="submit" className="diagonal btn__submit">
        SEND
      </button>
    </form>
  );
};

export { ContactForm };
