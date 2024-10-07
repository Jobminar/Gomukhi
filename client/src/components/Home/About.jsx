import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/About.css"; // Make sure your path is correct
import cityInFrame from "./assets/images/cityinaframe.jpg"; // Update with the correct path to your image

const About = () => {
  return (
    <Container className="about-section">
      <Row className="align-items-center">
        <Col md={8}>
          <h4 className="about-title">OUR STORY</h4>
          <p className="about-description">
            Gomukhi infra projects is a premier real estate company that offers
            exceptional plotted land development services. With a focus on
            building sustainable communities, Gomukhi infra projects has been a
            leader in the industry for over a decade.
            <br></br> We are proud to have served over one lakh satisfied
            customers and completed over 225 plotted land development projects
            across various locations in Telangana and Andhra Pradesh. Our
            commitment to excellence has earned us numerous awards and
            recognition within the industry.
          </p>
        </Col>
        <Col md={4}>
          <img
            src={cityInFrame}
            alt="City in a frame"
            className="about-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
