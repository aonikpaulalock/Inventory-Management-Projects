import React from 'react';
import "../Styles/Home/Footer.css"
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
const Footer = () => {
  return (
    <>
      <div className="frist-back">
        <div className="">
          <div className="container">
            <div className="frist-content">
              <h1 className="footer-heading">
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="#dddd" class="bi bi-bicycle" viewBox="0 0 16 16">
                    <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
                  </svg>
                  <h3 className="brand-heading text-white">Rent <span className="ride">Ride</span></h3>
                </Navbar.Brand>
              </h1>
              <div className="footer-sub-heading">
                <Link to="/">Home</Link>
                <Link to="/aboutpage">About</Link>
                <Link to="/servicePages">Services</Link>
                <Link to="/blogs">Blog</Link>
                <Link to="/contactPage">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-hr" />
        <div>
          <div className="container">
            <div className="second-foooter-content">
              <h6 className="second-footer-heading">© Copyright 2022. All right reserved.</h6>
              <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="#dddd" class="bi bi-bicycle" viewBox="0 0 16 16">
                  <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
                </svg>
                <h3 className="brand-heading text-white">Rent <span className="ride">Ride</span></h3>
              </Navbar.Brand>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;