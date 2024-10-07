import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import carouselImage from "./assets/images/carousalimg1.jpg"; // Ensure this path is correct
import "./styles/Carousal.css";

const CarouselComponent = () => {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
