import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Navnavbar = () => {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark" className="custom-navbar shadow">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            height={"30"}
            width={"30"}
            alt=""
          />{" "}
          text
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-md-end">
            <Nav.Link className="" href="#home">
              Home
            </Nav.Link>
            <Nav.Link href="#services">
              Services
            </Nav.Link>
            <Nav.Link href="#testimonials">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#faq">
              faq
            </Nav.Link>
            <Nav.Link href="#contact">
              contact
            </Nav.Link>
          </Nav>
          <Button variant="light" className="rounded-pill custom-btn-rounded">
            +917889259821{" "}
            <span>
              <FontAwesomeIcon className="mt-2 text-white" icon="fa-solid fa-phone" />
            </span>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
