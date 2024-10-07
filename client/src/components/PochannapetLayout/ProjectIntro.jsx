import React from "react";
import { Container } from "react-bootstrap";
import "./styles/ProjectIntro.css"; // Make sure to create this CSS file

const ProjectIntro = () => {
  return (
    <Container className="project-intro text-center my-5" fluid>
      {/* Content here, potentially with background image */}
      <h1>Pochannapet Layout</h1>
      <p>Nestled in the heart of Telangana...</p>
    </Container>
  );
};

export default ProjectIntro;
