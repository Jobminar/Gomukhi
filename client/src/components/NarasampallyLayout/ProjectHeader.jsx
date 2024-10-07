import React from "react";
import { Container } from "react-bootstrap";
import "./styles/ProjectHeader.css";

const ProjectHeader = ({ title }) => {
  return (
    <Container className="project-header my-5">
      <h1>{title}</h1>
      {/* You may want to add more elements here based on your layout */}
    </Container>
  );
};

export default ProjectHeader;
