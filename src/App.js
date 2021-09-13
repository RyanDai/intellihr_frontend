import "./App.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from "./components/Users";
import Tests from "./components/Tests";
import Submissions from "./components/Submissions";

function App() {
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

      <BrowserRouter>
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/tests">
            <Tests />
          </Route>
          <Route path="/submissions">
            <Submissions />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
