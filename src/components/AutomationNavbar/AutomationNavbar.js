import React from "react";
import { CustomNav } from "./style";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function AutomationNavbar() {
  return (
    <CustomNav expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Automation Labs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#courses">Courses</Nav.Link>
            <Nav.Link href="#corp-training">Corporate training</Nav.Link>
            <Nav.Link href="#referral">Referral Bonus</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </CustomNav>
  );
}
