import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.styles.scss';

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navigation-container" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="navigation-header">
            <Link to="/">Irakli Imesashvili</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="row navigation-links">
                <Nav.Link className="col nav-link">
                  <Link to="/">About</Link>
                </Nav.Link>
                <Nav.Link className="col nav-link">
                  <Link to="/skills">Skills</Link>
                </Nav.Link>
                <Nav.Link className="col nav-link">
                  <Link to="/experience">Experience</Link>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
