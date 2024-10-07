import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Phone, Email, WhatsApp, AccountTree } from "@mui/icons-material";

const StickyFooter = () => {
  const callNow = () => {
    // Implement the logic to make a phone call
    window.location.href = "tel:+918500777078";
  };

  const enquireNow = () => {
    // Implement the logic to send an email
    window.location.href = "mailto:info@gomukiinfraprojects.com";
  };

  const openWhatsApp = () => {
    // Implement the logic to open WhatsApp
    // You can use a WhatsApp API or simply open the WhatsApp web
    window.open("https://wa.me/918500777078", "_blank");
  };

  const redirectToProjects = () => {
    // Implement the logic to redirect to the projects page
    window.location.href = "/narsampally-layout";
  };

  return (
    <footer className="footer d-block d-sm-none">
      <Container>
        <Row className="justify-content-around">
          <Col xs={3} className="text-center" onClick={callNow}>
            <Phone fontSize="small" />
            <p>Call Now</p>
          </Col>
          <Col xs={3} className="text-center" onClick={enquireNow}>
            <Email fontSize="small" />
            <p>Enquire Now</p>
          </Col>
          <Col xs={3} className="text-center" onClick={openWhatsApp}>
            <WhatsApp fontSize="small" />
            <p>WhatsApp</p>
          </Col>
          <Col xs={3} className="text-center" onClick={redirectToProjects}>
            <AccountTree fontSize="small" />
            <p>Projects</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default StickyFooter;
