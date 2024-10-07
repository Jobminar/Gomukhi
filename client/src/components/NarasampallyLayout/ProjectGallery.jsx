import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "./styles/ProjectGallery.css";

const ProjectGallery = ({ images }) => {
  return (
    <Container className="project-gallery my-5">
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ProjectGallery;
