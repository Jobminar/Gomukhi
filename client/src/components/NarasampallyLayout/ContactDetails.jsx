import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/ContactDetails.css";

const ContactDetails = ({ address, phone, email }) => {
  return (
    <Container className="contact-details my-5">
      <Row>
        <Col>
          <p>Address: {address}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactDetails;
