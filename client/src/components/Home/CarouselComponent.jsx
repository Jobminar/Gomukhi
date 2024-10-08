import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import carouselImage from "./assets/images/carousalimg1.jpg"; // Ensure this path is correct
import logoSvg from "./assets/images/logo.svg"; // Import the logo
import "./styles/Carousal.css";

const CarouselComponent = () => {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage} alt="First slide" />
        <div className="carousel-logo-container">
          <img src={logoSvg} alt="Logo" className="carousel-logo" />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage} alt="Second slide" />
        <div className="carousel-logo-container">
          <img src={logoSvg} alt="Logo" className="carousel-logo" />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImage} alt="Third slide" />
        <div className="carousel-logo-container">
          <img src={logoSvg} alt="Logo" className="carousel-logo" />
        </div>
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
