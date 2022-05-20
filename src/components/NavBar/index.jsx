import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navBar.css'
import { MdDirectionsBike } from "react-icons/md";
import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'react-i18next'

function NavBar() {
  const {t} = useTranslation("global");

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
                {t("nav.home")}
              </Nav.Link>
              <Nav.Link as={Link} to="/catalogue">
                {t("nav.catalogue")}
              </Nav.Link>
              <Nav.Link as={Link} to="/Rental">
                {t("nav.rental")}
              </Nav.Link>
            </Nav>
           <LanguageSelector/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;