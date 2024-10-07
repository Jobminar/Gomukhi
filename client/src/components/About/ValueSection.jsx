// ValuesSection.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style/ValuesSection.css"; // Make sure this CSS file is linked correctly

// Import images
import customerSatisfactionImage from "./assets/images/customersatisfaction.jpg";
import passionImage from "./assets/images/passion.jpg";
import professionalismImage from "./assets/images/professionalism.jpg";
import integrityImage from "./assets/images/intigrity.jpg";
import agileImage from "./assets/images/Agile.jpg";

const values = [
  {
    title: "Customer Satisfaction",
    description:
      "At the core of everything we do are the seamless customer experiences we deliver.",
    img: customerSatisfactionImage,
  },
  {
    title: "Passion",
    description:
      "Gomukhi infra projects is fuelled by the fires of our passion to build a better real estate industry.",
    img: passionImage,
  },
  // ... Add the other values here with their respective images
  {
    title: "Professionalism",
    description:
      "Our highly trained team ensures that you receive the expertise that you deserve.",
    img: professionalismImage,
  },
  {
    title: "Integrity",
    description:
      "Honesty and transparency in all that we do is what makes us approachable.",
    img: integrityImage,
  },
  {
    title: "Agile",
    description:
      "We innovate and adapt to changing market conditions to always come out on top",
    img: agileImage,
  },
];

const ValuesSection = () => {
  return (
    <Container className="values-section my-5 p-1">
      <h4 className="my-2 mb-5">Best Values</h4>
      <Row>
        {values.map((value, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="value-card">
              <Card.Img variant="top" src={value.img} className="value-image" />
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>{value.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ValuesSection;
