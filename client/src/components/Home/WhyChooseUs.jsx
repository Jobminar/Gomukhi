import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import thousandsofposts from "./assets/images/thousandsofposts.jpg"; // Adjust the import path as necessary
import smartfilter from "./assets/images/smartfilter.jpg"; // Adjust the import path as necessary
import greatsupport from "./assets/images/greatsupport.jpg"; // Adjust the import path as necessary
import featuredhouse from "./assets/images/featuredhouse.jpg";
import "./styles/WhyChooseUs.css"; // Ensure the path is correct

const WhyChooseUs = () => {
  const features = [
    {
      icon: thousandsofposts,
      title: "Thousands of posts every day",
      text: "The lists are always refreshed and updated constantly, you will never miss",
    },
    {
      icon: smartfilter,
      title: "Smart filter",
      text: "Find the right house for you in the shortest amount of time",
    },
    {
      icon: greatsupport,
      title: "Great Support",
      text: "After-sales care service, helpful advice to avoid scams",
    },
    // ...add other features if needed
  ];

  return (
    <Container className="why-choose-us my-5">
      <Row>
        <Col lg={6} md={10}>
          <h4 className="why-choose-us-title">Why Choose Us</h4>
          <hr></hr>
          <h6 className="why-choose-us-subtitle">
            Our job is to ensure that you get the best possible deal on the
            property.
          </h6>
          {features.map((feature, index) => (
            <div key={index} className="why-choose-us-feature">
              <img
                src={feature.icon}
                alt={feature.title}
                className="why-choose-us-icon"
              />
              <div className="why-choose-us-info">
                <h5 className="why-choose-us-info-title">{feature.title}</h5>
                <h6 className="why-choose-us-info-text">{feature.text}</h6>
              </div>
            </div>
          ))}
        </Col>
        <Col lg={6} md={2} className="d-none d-lg-flex justify-content-center">
          {/* Include a placeholder or an actual image here */}
          <img
            src={featuredhouse} // Replace with your actual image path
            alt="Feature representation"
            className="why-choose-us-feature-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
