import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import "../Styles/Home/Header.css"
const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="#42baf4" class="bi bi-bicycle" viewBox="0 0 16 16">
            <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
          </svg>
          <h3 className="brand-heading">Rent <span className="ride">Ride</span></h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="anchor-item">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="anchor-item">About</Nav.Link>
            <Nav.Link as={Link} to="/services" className="anchor-item">Services</Nav.Link>
            <Nav.Link as={Link} to="/reviews" className="anchor-item">Reviews</Nav.Link>
            {
              user &&
              <>
                <Nav.Link as={Link} to="/manageInventory" className="anchor-item">Manage</Nav.Link>
                <Nav.Link as={Link} to="/addInventory" className="anchor-item">Add</Nav.Link>
              </>
            }
          </Nav>
          <div className="d-lg-flex justify-lg-content-around align-lg-items-center">
            {
              !user ?
                <>
                  <Nav.Link as={Link} to="/signin">
                    <button className="authentication-button mb-4 mb-lg-0">Login</button>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    <button className="authentication-button">Signup</button>
                  </Nav.Link>
                </>
                :
                <Nav.Link as={Link} to="#">
                  <button className="authentication-button" onClick={() => signOut(auth)}>Logout</button>
                </Nav.Link>
            }
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;