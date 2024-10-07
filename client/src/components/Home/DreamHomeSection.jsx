import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./styles/DreamHomeSection.css"; // Make sure to create this CSS file
import { useNavigate } from "react-router-dom";
import houseImage from "./assets/images/house-in-hand.png"; // Update with the correct path to your image

const DreamHomeSection = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleExploreClick = () => {
    navigate("/narsampally-layout"); // Navigate to the specified route
  };
  return (
    <Container className="dream-home-section py-1 my-5 mb-0" fluid>
      <Row className="align-items-center">
        <Col lg={6} md={8} className="position-relative" style={{ zIndex: 10 }}>
          <img src={houseImage} alt="Dream Home" className="house-image" />
        </Col>

        <Col
          lg={6}
          md={4}
          className="py-1 text-center text-lg-start"
          id="text-contain"
        >
          <div className="text-container w-100">
            <h4 className="title">Looking For Your Dream Home?</h4>
            <h6 className="subtitle">
              We help you make the dream of new home into reality
            </h6>
            <button className="explore-btn" onClick={handleExploreClick}>
              Explore <span className="arrow">&rarr;</span>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DreamHomeSection;
