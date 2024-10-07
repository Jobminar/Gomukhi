import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/ProjectAmenities.css"; // Make sure to create this CSS file

const amenities = [
  // Add your amenities details here
];

const ProjectAmenities = () => {
  return (
    <Container className="project-amenities my-5">
      <Row>
        {amenities.map((amenity, index) => (
          <Col key={index} xs={6} md={3} className="text-center">
            {/* Icons and text here */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectAmenities;
