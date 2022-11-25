import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const MyNavbar = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">My-React-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="/bisection">Bisection</NavDropdown.Item>
                <NavDropdown.Item href="/falseposition">FalsePosition</NavDropdown.Item>
                <NavDropdown.Item href="/onepoint">Onepoint Iteration</NavDropdown.Item>
                <NavDropdown.Item href="/newtonraphson">NewtonRaphson</NavDropdown.Item>
                <NavDropdown.Item href="/secant">Secant</NavDropdown.Item>
                <NavDropdown.Item href="/lagrange">lagrange</NavDropdown.Item>
                <NavDropdown.Item href="/spline">spline</NavDropdown.Item>
                <NavDropdown.Item href="/regression">regression</NavDropdown.Item>
                <NavDropdown.Item href="/testing">Testing</NavDropdown.Item>
                <NavDropdown.Item href="/test">TestM</NavDropdown.Item>
                <NavDropdown.Item href="/Matrix">Marix</NavDropdown.Item>
                <NavDropdown.Item href="/gauss">Gauss</NavDropdown.Item>
                <NavDropdown.Item href="/testRe">TestRe</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
export default MyNavbar