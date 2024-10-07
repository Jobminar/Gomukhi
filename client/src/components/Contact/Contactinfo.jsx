import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./styles/Contactinfo.css"; // Custom CSS for additional styling
import contactBanner from "./assets/images/contactpagebanner.jpg"; // Ensure the path is correct
import emailIcon from "./assets/images/Email.png";
import phoneIcon from "./assets/images/Phone.png";
import gpsIcon from "./assets/images/Gps.png";

const ContactInfo = () => {
  const handleAddressClick = () => {
    const addressQuery = encodeURIComponent(
      "2nd Floor, Saikrupa Building, Plot No. 168, Near Shilparamam, Uppal Bhagayath, Hyderabad - 500039",
    );
    window.open(`https://maps.google.com/?q=${addressQuery}`, "_blank");
  };

  return (
    <div>
      <div className="contact-banner">
        <img src={contactBanner} alt="Contact Banner" />
      </div>
      <Container className="contact-info my-4">
        <Row>
          <Col sm={4}>
            <Card
              className="text-center p-3"
              onClick={() =>
                (window.location.href = "mailto:info@gomukiinfraprojects.com")
              }
            >
              <Card.Body>
                <img
                  className="icon"
                  src={emailIcon}
                  alt="Email"
                  style={{ width: "3.5rem", height: "auto" }}
                />

                <Card.Title
                  style={{ marginBottom: "4rem", marginTop: "1.5rem" }}
                >
                  Email us
                </Card.Title>
                <Card.Text>info@gomukiinfraprojects.com</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              className="text-center p-3"
              onClick={() => (window.location.href = "tel:+918500777078")}
            >
              <Card.Body>
                <img className="icon" src={phoneIcon} alt="Phone" />
                <Card.Title
                  style={{ marginBottom: "2.5rem", marginTop: "1.5rem" }}
                >
                  Phone number
                </Card.Title>
                <Card.Text style={{ marginBottom: "0.5rem" }}>
                  +918500777078
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="text-center p-3" onClick={handleAddressClick}>
              <Card.Body>
                <img className="icon" src={gpsIcon} alt="Address" />
                <Card.Title
                  style={{ marginBottom: "1rem", marginTop: "0.1rem" }}
                >
                  Address
                </Card.Title>
                <Card.Text style={{ marginBottom: "0.5rem" }}>
                  <span onClick={handleAddressClick}>
                    Plot No-209,Road No.2,Nagarjuna Colony,Sagar
                    Road,Hasthinapuram,Hyderabad,500079.
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfo;
