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
              <input class="input-feild shadow input-feild-3"
                type="text"
                name="Enter Your Name"
                placeholder="Enter Your Name"
                required
              />
            </Form.Group>
            <Form.Group className="input-name">
              <input class="input-feild shadow input-feild-3"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                autoComplete='off'
              />
            </Form.Group>
            <Form.Group className="input-name">
              <textarea
                type="text"
                rows="6"
                name="description"
                placeholder="Enter Your Message"
                className="input-feild shadow input-feild-3"
                required />
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