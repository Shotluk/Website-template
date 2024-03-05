
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

function NavbarCustom({ isLoggedIn, setLoggedIn, validCredentials, setValidCredentials}) {
  
  const navigate = useNavigate();

  const handleDropdownSelect = (eventKey) => {
    // You can perform any additional logic here based on the selected value
    console.log('Selected Service:', eventKey);
  };

  const handleLogout = () => {
    setLoggedIn(false);

    // Set the selected attribute to false for all credentials
  const updatedCredentials = validCredentials.map((cred) => ({
    ...cred,
    selected: false,
  }));

  // Update the validCredentials state
  setValidCredentials(updatedCredentials);
  };

  const handleLogin = () => {
    // Replace the condition with your actual authentication logic
    navigate('/login');
  };

  const getGreetingMessage = () => {
    // Find the first credential with selected set to true
    const selectedCredential = validCredentials.find((cred) => cred.selected);
  
    // Check if a selected credential is found
    if (selectedCredential) {
      // Check if the username is defined in the selected credential
      if (selectedCredential.user_name !== undefined && selectedCredential.user_name !== null) {
        // If defined, return a greeting with the username
        return `Hello ${selectedCredential.user_name}`;
      } else {
        // If username is not defined, return a default greeting for admin
        return 'Hello admin';
      }
    } else {
      // If not found, return a default greeting for admin
      return 'Hello admin';
    }
  };
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              onSelect={handleDropdownSelect}
            >
              <NavDropdown.Item as={Link} to="/services/Dental" eventKey="Dental">
                Dental
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/Pharmacy" eventKey="Pharmacy">
                Pharmacy
              </NavDropdown.Item>
              {/* Add other services as needed */}
            </NavDropdown>
          </Nav>
          <Nav>
            {isLoggedIn ? (
              <NavDropdown title={getGreetingMessage()} id="basic-nav-dropdown">
                {/* Add dropdown items for user actions */}
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
