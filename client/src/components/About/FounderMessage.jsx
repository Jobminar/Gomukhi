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
          <h3>K.SAI RUDHRA RAJU</h3>
          <p>
            Gomuki Infra Projects Developers is a premier real estate company
            that offers exceptional plotted land development services. With a
            focus on building sustainable communities, Gomuki Infra Projects
            Developers has been a leader in the industry for over a decade. We
            are proud to have served over one lakh satisfied customers and
            completed over 225 plotted land development projects across various
            locations in Telangana . Our commitment to excellence has earned us
            numerous awards and recognition within the industry.
          </p>
        </Col>
        <Col md={6}>
          <img
            src={founderImage}
            alt="Founder"
            className="img-fluid"
            id="founder-img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FounderMessage;
