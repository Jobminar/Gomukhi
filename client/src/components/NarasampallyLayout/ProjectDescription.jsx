import React from "react";
import { Container } from "react-bootstrap";
import "./styles/ProjectDescription.css";

const ProjectDescription = ({ text }) => {
  return (
    <Container className="project-description">
      <p>{text}</p>
    </Container>
  );
};

export default ProjectDescription;
