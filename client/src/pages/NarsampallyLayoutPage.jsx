import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Assume the images are in the ./assets/images/ directory
import NarasampallyBanner from "./assets/images/Narasampally.png";
import NarasampallyFooter from "./assets/images/NarasampallyFooter.png";
import NarasampallyRound2 from "./assets/images/Narasampallyround-2.png";
import NarasampallyRound3 from "./assets/images/Narasampallyround-3.png";
import NarasampallyRound4 from "./assets/images/Narasampallyround-4.png";

const NarasampallyLayout = () => {
  return (
    <Container fluid className="p-0 m-0 narasampally-layout">
      {/* Banner Image */}
      <Row className="banner-row">
        <Col>
          <img
            src={NarasampallyBanner}
            alt="Narasampally Layout"
            className="w-100 py-2 px-3"
          />
        </Col>
      </Row>

      {/* Text and Image Features */}
      <Container className="my-2">
        <Row className="justify-content-center">
          {/* Text Content */}
          <Col lg={12} className="text-content my-5 justify-content-center">
            <div className="layout-content mb-5">
              <h4>Almasguda Layout</h4>
              <p>
                Nestled in the picturesque landscapes of Telangana, Almasguda
                Layout is a premier plotted land development project by Gomukhi
                infra projects . With its strategic location and world-class
                amenities, this layout is perfect for those seeking a luxurious
                lifestyle amidst nature.
              </p>

              <p>
                Nestled in the picturesque landscapes of Telangana, Almasguda
                Layout is a premier plotted land development project by Gomukhi
                infra projects . With its strategic location and world-class
                amenities, this layout is perfect for those seeking a luxurious
                lifestyle amidst nature.
              </p>
            </div>
          </Col>
          <Row className="align-items-center">
            <Col>
              <img
                src={NarasampallyFooter}
                alt="Narasampally Layout"
                className="img-fluid w-100 rounded-4"
              />
            </Col>
          </Row>
          {/* Image Container */}
        </Row>

        {/* Add more paragraphs as needed */}
        <Row className="justify-content-center">
          {/* Text Content */}
          <Col lg={8} className="text-content">
            <div className="wonders-content my-5">
              <h4>Create your World with unlimited wonders</h4>
              <p>
                Nature’s beauty is truly mesmerizing. She has her way of
                rewarding us with both tangible and intangible moments of
                wonder. And while these moments may seem far and few, they often
                surround us. Take a moment to lose yourself in these intricate
                moments of nature from the comfort of your urban luxuries, at
                Hastina Nature City
              </p>
              <p>
                Nature is important for our physical and mental health. It
                provides us with a place to escape the hustle and bustle of city
                life and to connect with the natural world. Nature can also help
                us to learn about the environment and to appreciate the beauty
                of the world around us
              </p>
            </div>
          </Col>
          {/* Image Container */}
          <Col lg={4} className="image-container">
            <img
              src={NarasampallyRound2}
              alt="Open Spaces"
              className="feature-image"
              style={{ transform: "scale(0.76)" }}
            />
            <img
              src={NarasampallyRound3}
              alt="Septic Tank"
              className="feature-image"
              style={{ transform: "scale(0.76)" }}
            />
            <img
              src={NarasampallyRound4}
              alt="Street Lights"
              className="feature-image"
              style={{ transform: "scale(0.76)" }}
            />
            {/* Add more images as needed */}
          </Col>
        </Row>
        {/* Footer Image */}
      </Container>
    </Container>
  );
};

export default NarasampallyLayout;
