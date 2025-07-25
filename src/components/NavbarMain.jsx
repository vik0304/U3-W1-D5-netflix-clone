import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";

function NavbarMain() {
  return (
    <Navbar expand="lg" className="bg-netflix" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="logo.png" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="active fw-bold" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#link">
              TV Shows
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#link">
              Movies
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#link">
              Recently Added
            </Nav.Link>
            <Nav.Link className="fw-bold" href="#link">
              My List
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <Search className="text-light fs-5" />
            </Nav.Link>
            <Nav.Link href="#link" className="text-light fs-5">
              KIDS
            </Nav.Link>
            <Nav.Link href="#link">
              <Bell className="text-light fs-5" />
            </Nav.Link>
            <Nav.Link href="#link">
              <PersonCircle className="text-light fs-5" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
