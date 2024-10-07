import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import "./styles/HappyCustomers.css"; // Make sure this CSS path is correct
// Importing images
import mirzaHasaniImg from "./assets/images/mirza-hasani.jpg"; // Ensure the path is correct
import srinivasImage from "./assets/images/srinivas-image.jpg"; // Ensure the path is correct
import anushasImage from "./assets/images/anushas-image.jpg"; // Ensure the path is correct
const testimonials = [
  {
    name: "Mirza hasanain",
    text: "I felt their service is beyond my expectation and they followup to complete the process in good way.",
    rating: 5,
    image: mirzaHasaniImg,
  },
  {
    name: "Srinivasan M",
    text: "Wisdom Properties have good experienced in the field and giving good support with customer.",
    rating: 5,
    image: srinivasImage,
  },
  {
    name: "Anusha D",
    text: "Wisdom Properties have good experienced in the field and giving good support with customer.",
    rating: 5,
    image: anushasImage,
  },
];

const HappyCustomers = () => {
  return (
    <Container className="happy-customers-section">
      <h4>From Our Happy Customers</h4>
      <hr></hr>
      <h6>
        Read some of our client testimonials about how and why they used Dream
        Home to buy and sell
      </h6>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="testimonial-card">
              {/* Image container to help position the image */}
              <div className="testimonial-image-container">
                <Card.Img
                  variant="top"
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
              </div>
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarFill key={i} className="text-warning" />
                  ))}
                </div>
                <Card.Text>{testimonial.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HappyCustomers;
