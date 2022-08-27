import React from 'react';
import { Form } from 'react-bootstrap';
import contact from "../Asset/Contact/contact.png"
const Contact = () => {
  return (
    <div className="container">
      <div>
        <h1 className="share-main-title">Contac<span className="ride">t Us</span></h1>
        <p className="share-sub-title">The proper business solution for your developing business strategies and corporation</p>
      </div>
      <div className="row">
        <div className="col-md-6 pt-5">
          <div className="form-container mt-5 pt-5">
            <Form.Group className="input-name">
              <Form.Control type="text" name="text" placeholder="Enter Your Name"
                className="input"
                required
                autoComplete='off'
              />
            </Form.Group>
            <Form.Group className="input-name">
              <Form.Control type="email" name="email" placeholder="Enter Your Password" className="input" required />
            </Form.Group>
            <Form.Group className="input-name">
              <Form.Control as="textarea"  className="fs-3 fw-semibold" rows="6" name="message" placeholder="Enter Your Message" />
            </Form.Group>
            <button type="submit" className="Signup-Button">Send Message</button>
          </div>
        </div>
        <div className="col-md-6   d-flex align-items-center justify-content-center">
          <img src={contact} alt="" className="img-fluid" />
        </div>
      </div>
    </div >
  );
};

export default Contact;