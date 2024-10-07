import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./styles/ContactForm.css"; // Ensure CSS path is correct

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    project: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nProject: ${formData.project}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918500777078?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank"); // This will open WhatsApp in a new tab with the pre-filled message
  };

  return (
    <Container className="contact-form-container my-5">
      <Row>
        <Col lg={12}>
          <h2 className="contact-now">Contact now</h2>
          <Form onSubmit={handleSubmit} className="contact-form">
            <Row className="mb-3">
              <Col sm={6} className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="contact-input mb-3"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <Form.Select
                  aria-label="Select project"
                  className="contact-select mb-3"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                >
                  <option value="">Select project</option>
                  <option value="Narsampally Layout">Narsampally Layout</option>
                  <option value="Pochannapet Layout">Pochannapet Layout</option>
                </Form.Select>
              </Col>
              <Col sm={6} className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="contact-input mb-3"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Control
                  type="tel"
                  placeholder="Mobile number"
                  className="contact-input mb-3"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col sm={12}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write message"
                  className="contact-textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={12}>
          <div className="map-container">
            <iframe
              title="Gomukhi infra projects Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.708845652016!2d78.5572633148782!3d17.40574068807135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91a000000001%3A0xf47ed2f1d8a3bb0!2sGomukhi infra projects%20Realty%20Developers!5e0!3m2!1sen!2sin!4v1647763421545!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
