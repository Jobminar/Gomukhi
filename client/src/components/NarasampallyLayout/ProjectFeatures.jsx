import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/ProjectFeatures.css";

const ProjectFeatures = ({ features }) => {
  return (
    <Container className="project-features my-5">
      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={4} className="mb-3">
            {/* Icon should be placed here based on feature.icon */}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectFeatures;
