import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import teamImage from "./assets/images/team-image.png"; // Correct the path as necessary
import "./style/TeamSection.css";

const TeamSection = () => {
  return (
    <Container className="team-section my-5 px-2 py-5">
      <Row className="align-items-center justify-content-center">
        <h4>Meet Our Team</h4>
      </Row>

      <Row className="align-items-center">
        <Col md={6} className="team-text">
          <p>
            At Gomukhi infra projects , we believe in the principles of Mahatma
            Gandhi and strive to create a positive impact on the communities we
            serve. We understand the importance of long-term savings and wealth
            creation for our customers, which is why we provide safe and secure
            opportunities for them to own a piece of land and build a better
            future for their families.
          </p>
        </Col>
        <Col md={6} className="text-center">
          <img src={teamImage} alt="Team" className="img-fluid team-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default TeamSection;
