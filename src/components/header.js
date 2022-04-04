import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Search from "./search";
import logo from "../assets/logo.png";

export default function Header({ handleChange }) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} width="60%" alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">About Us</Nav.Link>
              <Nav.Link href="#action1">Events</Nav.Link>
              <Nav.Link href="#action1">Nordic Roasters</Nav.Link>
              <Nav.Link href="#action1">Results</Nav.Link>
              <Nav.Link href="#action2">Links</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            <Search handleChange={handleChange} />
            <div className="text-center">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm btn-fb mx-1"
                    href="#action1"
                  >
                    <i className="fa fa-facebook"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm btn-tw mx-1"
                    href="#action1"
                  >
                    <i className="fa fa-twitter"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm btn-gplus mx-1"
                    href="#action1"
                  >
                    <i className="fa fa-google-plus"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm btn-li mx-1"
                    href="#action1"
                  >
                    <i className="fa fa-linkedin"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm btn-dribbble mx-1"
                    href="#action1"
                  >
                    <i className="fa fa-dribbble"> </i>
                  </a>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
