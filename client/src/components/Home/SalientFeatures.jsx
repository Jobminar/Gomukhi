import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/SalientFeatures.css"; // Ensure your path is correct
import leafIcon from "./assets/images/leaf.png"; // Importing the leaf icon here

const features = [
  { key: "vastu", text: "100 % Vastu" },
  { key: "security", text: "24 Hours security" },
  { key: "pool", text: "Swimming Pool" },
  { key: "house", text: "Guest house" },
  { key: "park", text: "Children Park" },
  { key: "environment", text: "Zero pollution Environment" },
  { key: "roads", text: "40' x 30' feet Gravel Roads" },
  { key: "irrigation", text: "Drip Irrigation System" },
  { key: "passbook", text: "Pass book will be issued for" },
  { key: "605sq. Yards(5 Guntas)", text: "605sq. Yards(5 Guntas)" },
  { key: "maintenance", text: "12 Years Maintenance" },
  { key: "plants", text: "15 Sandalwood Plants per 150 sq.yds" },
];

const SalientFeatures = () => {
  return (
    <Container fluid className="salient-features">
      <Row className="justify-content-md-center">
        <Col md={12} className="text-center salient-features-header">
          <h2>Salient Features</h2>
        </Col>
        {features.map((feature) => (
          <Col key={feature.key} xs={12} sm={6} md={4} className="feature">
            <img src={leafIcon} alt="Leaf Icon" className="feature-icon" />
            <p className="feature-text">{feature.text}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SalientFeatures;
