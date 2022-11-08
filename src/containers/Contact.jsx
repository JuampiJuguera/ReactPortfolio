import React from "react";
import { ContactForm } from "../components/ContactForm";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-title">CONTACT</div>
      <div className="contact-div"></div>
      <p className="contact-text">
        Want to <span className="contact-text2">work</span> with me?
      </p>
      <ContactForm />
    </section>
  );
};

export { Contact };
