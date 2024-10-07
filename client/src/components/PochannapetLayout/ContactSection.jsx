import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/ContactSection.css"; // Make sure to create this CSS file

const ContactSection = () => {
  return (
    <Container className="contact-section my-5">
      <Row>
        <Col>
          <h2>Get In Touch</h2>
          {/* Contact details here */}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
