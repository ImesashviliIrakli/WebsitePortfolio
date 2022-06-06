import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.styles.scss';

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navigation-container" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="navigation-header">Irakli Imesashvili</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="row navigation-links">
                <Link className="col nav-link" to="/">
                  About
                </Link>
                <Link className="col nav-link" to="/skills">
                  Skills
                </Link>
                <Link className="col nav-link" to="/experience">
                  Experience
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
