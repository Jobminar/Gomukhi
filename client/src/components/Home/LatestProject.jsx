import React from "react";
import { Card, Row, Col, Carousel } from "react-bootstrap";
import "./styles/LatestProject.css"; // Ensure CSS path is correct
import leavesImg from "./assets/images/leaves.png"; // Import leaves image
import sunriseImg from "./assets/images/sunrise.png"; // Import sunrise image

const LatestProject = () => {
  return (
    <div className="latest-projects-container">
      <h4 className="section-title">Latest Projects</h4>
      <div className="desktop-view">
        <Row>
          <Col md={6} className="mb-3">
            <Card className="project-card almasguda">
              <Card.Title className="project-title my-4 mb-0">
                <Row className="align-items-center no-gutters">
                  <Col xs={12} md={2} lg={2}>
                    <img src={sunriseImg} alt="Sunrise" className="top-image" />
                  </Col>
                  <Col xs={12} md={10} lg={10}>
                    <div className="text-container align-items-start">
                      <h6 className="mb-0 center-align">Gomuki Infra</h6>
                      <h4 className="ms-1">Almasguda, Balapur</h4>
                    </div>
                  </Col>
                </Row>
              </Card.Title>
              <Card.Body>
                <Card.Text className="m-0 text-left">
                  Fully approved by HMDA and crafted to ensure 100% Vaastu
                  compliance, we've blended convenience with thoughtful design.
                  Imagine coming home to tree-lined avenues, well-lit
                  30-foot-wide roads, and a pollution-free environment where
                  safety and comfort are our priorities.
                </Card.Text>
                <ul className="project-features text-left">
                  <h4>Location Highlights</h4>
                  <li>Only 15 minutes to Foxconn</li>
                  <li>15 minutes to Outer Ring Road</li>
                  <li>20 minutes to Rajiv Gandhi International Airport</li>
                  <li>15 minutes to Wonderla</li>
                  <li>18 minutes to Aerospace SEZ (TATA)</li>
                  <li>15 minutes to Fab City</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-3">
            <Card className="project-card choutuppal">
              <Card.Title className="project-title my-4 mb-0">
                <Row className="align-items-center">
                  <Col xs={12} md={2}>
                    <img src={leavesImg} alt="Leaves" className="top-image" />
                  </Col>
                  <Col xs={12} md={10}>
                    <h6 className="mb-0 center-align">Sri Chandana</h6>
                    <h4 className="ms-1">Choutuppal Town</h4>
                  </Col>
                </Row>
              </Card.Title>
              <Card.Body>
                <Card.Text className="m-0 text-left">
                  Fully approved by HMDA and crafted to ensure 100% Vaastu
                  compliance, we've blended convenience with thoughtful design.
                  Imagine coming home to tree-lined avenues, well-lit
                  30-foot-wide roads, and a pollution-free environment where
                  safety and comfort are our priorities.
                </Card.Text>
                <ul className="project-features text-left">
                  <h4>Location Highlights</h4>
                  <li>Near Kalanupaka Jain Temple</li>
                  <li>Hyderabad Warangal Industrial Grow Corridor</li>
                  <li>Near Yadadri Temple</li>
                  <li>Near AIIMS</li>
                  <li>Warangal to Vijayawada Connecting Road</li>
                  <li>Near to Proposed RRR</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="mobile-view">
        <Carousel>
          <Carousel.Item>
            <Card className="project-card almasguda">
              <Card.Title className="project-title my-4 mb-0">
                <Row className="align-items-center no-gutters">
                  <Col xs={12} md={2} lg={2}>
                    <img src={sunriseImg} alt="Sunrise" className="top-image" />
                  </Col>
                  <Col xs={12} md={10} lg={10}>
                    <div className="text-container align-items-start">
                      <h6 className="mb-0 center-align" id="top-title-left">
                        Gomuki Infra
                      </h6>
                      <h4>Almasguda, Balapur</h4>
                    </div>
                  </Col>
                </Row>
              </Card.Title>
              <Card.Body>
                <Card.Text className="m-0 text-left">
                  Fully approved by HMDA and crafted to ensure 100% Vaastu
                  compliance, we've blended convenience with thoughtful design.
                  Imagine coming home to tree-lined avenues, well-lit
                  30-foot-wide roads, and a pollution-free environment where
                  safety and comfort are our priorities.
                </Card.Text>
                <ul className="project-features text-left">
                  <h4>Location Highlights</h4>
                  <li>Only 15 minutes to Foxconn</li>
                  <li>15 minutes to Outer Ring Road</li>
                  <li>20 minutes to Rajiv Gandhi International Airport</li>
                  <li>15 minutes to Wonderla</li>
                  <li>18 minutes to Aerospace SEZ (TATA)</li>
                  <li>15 minutes to Fab City</li>
                </ul>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="project-card choutuppal">
              <Card.Title className="project-title my-4 mb-0">
                <Row className="align-items-center">
                  <Col xs={12} md={2}>
                    <img src={leavesImg} alt="Leaves" className="top-image" />
                  </Col>
                  <Col xs={12} md={10}>
                    <h6 className="mb-0 center-align" id="top-title-right">
                      Sri Chandana
                    </h6>
                    <h4 className="ms-1">Choutuppal Town</h4>
                  </Col>
                </Row>
              </Card.Title>
              <Card.Body>
                <Card.Text className="m-0 text-left">
                  Fully approved by HMDA and crafted to ensure 100% Vaastu
                  compliance, we've blended convenience with thoughtful design.
                  Imagine coming home to tree-lined avenues, well-lit
                  30-foot-wide roads, and a pollution-free environment where
                  safety and comfort are our priorities.
                </Card.Text>
                <ul className="project-features text-left">
                  <h4>Location Highlights</h4>
                  <li>Near Kalanupaka Jain Temple</li>
                  <li>Hyderabad Warangal Industrial Grow Corridor</li>
                  <li>Near Yadadri Temple</li>
                  <li>Near AIIMS</li>
                  <li>Warangal to Vijayawada Connecting Road</li>
                  <li>Near to Proposed RRR</li>
                </ul>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default LatestProject;
