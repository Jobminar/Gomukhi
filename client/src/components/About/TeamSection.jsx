import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import teamImage from "./assets/images/team-image.png"; // Correct the path as necessary
import "./style/TeamSection.css";

const TeamSection = () => {
  return (
    <Container className="team-section my-5 px-2 py-5">
      <Row className="align-items-center justify-content-center">
        <h4>Our Motto</h4>
      </Row>

      <Row className="align-items-center">
        <Col md={12} className="team-text">
          <p>
            At Gomukhi Infra Projects, we are committed to fostering community
            growth and making a lasting, positive impact. We recognize the
            significance of long-term savings and wealth creation, which is why
            we offer secure opportunities for customers to invest in land. Our
            goal is to provide a safe, reliable pathway for individuals and
            families to build a prosperous future through real estate ownership.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamSection;
