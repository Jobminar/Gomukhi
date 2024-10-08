import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { PencilSquare } from "react-bootstrap-icons";
import logo from "./logo.svg";
import mobileLogo from "./assets/images/mobilelogo.png";
import hamburgerIcon from "./hamburger.png";
import "./Header.css"; // Ensure your CSS path is correct

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  // Toggle the expanded state without affecting dropdown behavior
  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  // Programmatic navigation
  const handleNavigation = (path) => {
    navigate(path);
    setExpanded(false);
  };

  return (
    <Navbar bg="light" expand="lg" className="py-3" expanded={expanded}>
      <Container>
        <NavLink
          to="/"
          className="navbar-brand"
          onClick={() => handleNavigation("/")}
        >
          <img src={logo} alt="Gomukhi infra projects Logo" className="logo" />
          {/* <img src={mobileLogo} alt="Mobile Logo" className="mobile-logo" /> */}
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
          <img src={hamburgerIcon} alt="Menu" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-lg-center">
            <NavLink
              exact
              to="/"
              className="nav-link"
              onClick={() => handleNavigation("/")}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="nav-link"
              onClick={() => handleNavigation("/about")}
            >
              About US
            </NavLink>
            <NavDropdown title="Our Projects" id="basic-nav-dropdown">
              <NavLink
                to="/narsampally-layout"
                className="dropdown-item"
                onClick={() => handleNavigation("/narsampally-layout")}
              >
                Almasguda project
              </NavLink>
              <NavLink
                to="/pochannapet-layout"
                className="dropdown-item"
                onClick={() => handleNavigation("/pochannapet-layout")}
              >
                Choutuppal project
              </NavLink>
              {/* Add more dropdown links as needed */}
            </NavDropdown>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={() => handleNavigation("/contact")}
            >
              Contact US
            </NavLink>
          </Nav>

          <div>
            <NavLink
              to="/narsampally-layout"
              className="btn btn-outline-primary book-plot-btn"
              onClick={() => handleNavigation("/narsampally-layout")}
            >
              Book your plot
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
