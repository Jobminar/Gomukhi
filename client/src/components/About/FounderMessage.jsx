import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import founderImage from "./assets/images/Raghu ram.png"; // Make sure the path is correct
import "./style/FounderMessage.css"; // Ensure the CSS file is linked correctly

const FounderMessage = () => {
  return (
    <Container className="founder-message my-2">
      <Row className="align-items-center">
        <Col md={6}>
          <h5>MEET OUR FOUNDER</h5>
          <h3>Jana Raghu Ram</h3>
          <p>
            Gomukhi infra projects is a premier real estate company that offers
            exceptional plotted land development services. With a focus on
            building sustainable communities, Gomukhi infra projects has been a
            leader in the industry for over a decade.
          </p>
        </Col>
        <Col md={6}>
          <img src={founderImage} alt="Founder" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default FounderMessage;
