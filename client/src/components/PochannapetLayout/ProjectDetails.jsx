import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/ProjectDetails.css"; // Make sure to create this CSS file

const ProjectDetails = () => {
  return (
    <Container className="project-details my-5">
      <Row>
        <Col md={6}>
          <p>Description of the Pochannapet Layout...</p>
        </Col>
        <Col md={6}>{/* Place images or carousel here */}</Col>
      </Row>
    </Container>
  );
};

export default ProjectDetails;
