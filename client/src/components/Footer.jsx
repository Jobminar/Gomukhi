import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";
import "./Footer.css"; // Ensure CSS path is correct
import logoSvg from "./logo.svg"; // Import the logo image
import facebookIcon from "./assets/images/facebook.png";
import instagramIcon from "./assets/images/instagram.png";
import twitterIcon from "./assets/images/twitter.png";
import linkedinIcon from "./assets/images/linkedin.png";

const Footer = () => {
  useEffect(() => {
    // This will ensure the window.onload-like effect
    const handleAddressClick = () => {
      window.location.href = "https://maps.app.goo.gl/rPHps2z1FZBcfUYY7";
    };

    const addressElement = document.querySelector(".footer-address");
    if (addressElement) {
      addressElement.addEventListener("click", handleAddressClick);
    }

    return () => {
      // Cleanup the event listener on component unmount
      if (addressElement) {
        addressElement.removeEventListener("click", handleAddressClick);
      }
    };
  }, []);

  return (
    <Container fluid className="footer-container">
      <Row>
        <Col sm={6} md={{ span: 5, offset: 1 }} className="footer-logo-col">
          <img
            src={logoSvg}
            alt="Gomukhi infra projects Logo"
            className="footer-logo"
          />
          <address className="footer-address" style={{ cursor: "pointer" }}>
            Plot No-209,
            <br />
            Road No.2, Nagarjuna Colony,
            <br />
            Sagar Road, Hasthinapuram,
            <br />
            Hyderabad, 500079.
          </address>
        </Col>
        <Col sm={6} md={5} className="footer-contact-col">
          <h4 className="footer-contact-header">Get In Touch</h4>
          <p className="footer-contact-info">
            <a href="tel:+918500777078">
              <TelephoneFill /> 8500777078
            </a>
            <br />
            <a href="mailto:info@gomukiinfraprojects.com">
              <EnvelopeFill /> info@gomukiinfraprojects.com
            </a>
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com">
              <img src={facebookIcon} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://instagram.com">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a href="https://twitter.com">
              <img src={twitterIcon} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://linkedin.com">
              <img src={linkedinIcon} alt="Linkedin" className="social-icon" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
