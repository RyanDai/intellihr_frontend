import { Nav, Navbar, Container } from "react-bootstrap";

function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Tests Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/users">Subjects</Nav.Link>
              <Nav.Link href="/tests">Questions</Nav.Link>
              <Nav.Link href="/submissions">Submissions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
