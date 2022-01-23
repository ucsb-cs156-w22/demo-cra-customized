import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function AppNavbar() {
  return (
    <Navbar expand="xl" variant="dark" bg="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Demo Frontend Only</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action/one">Action</NavDropdown.Item>
              <NavDropdown.Item href="/action/two">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/action/three">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/action/four">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}