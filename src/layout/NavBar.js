import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <div className="pageContainer">
      <Navbar fixed="top" variant="dark" bg="dark" expand="lg" className="navigation" >
        <Container>
          <Navbar.Brand as={Link} to="/">
            RENT@BIKE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav navbarScroll className="me-auto links">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/catalogue">
                Catalogue
              </Nav.Link>
              <Nav.Link as={Link} to="/Rental">
                Rental
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main className="mainSection">
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;