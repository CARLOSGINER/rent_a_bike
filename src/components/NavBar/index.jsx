import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navBar.css'
import { MdDirectionsBike } from "react-icons/md";
import LanguageSelector from '../LanguageSelector';

function NavBar() {
  return (
      <Navbar fixed="top" variant="dark" bg="dark" expand="lg" className="navigation" >
        <Container>
          <Navbar.Brand as={Link} to="/">
            RENT <MdDirectionsBike className="icon_bike"/> BIKE
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
           <LanguageSelector/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;