import React from "react";

import ContactForm from "../components/Contact/ContactForm";

import "./Contact.css"; // Custom CSS for the Contact page layout
import ContactInfo from "../components/Contact/Contactinfo";

const Contact = () => {
  return (
    <div className="contact-page m-2">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
