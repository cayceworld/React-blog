import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded">
      <Container>
        <Navbar.Brand href="#home" className="col-8 col-md-6">Blog.app</Navbar.Brand>
        <Nav className="col-auto">
          <Nav className="me-auto rounded">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/Categories">Categories</Nav.Link>
          </Nav>
        </Nav>
      </Container>
    </Navbar>

  )
}

export default NavBar; 