import React from 'react';
import { Button, Form } from 'react-bootstrap';
import "../Styles/Home/contact.css"
import contact from "../Asset/Contact/contact1.png"
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';
const Contact = () => {
  return (
    <div className="container my-5">
      <div>
        <h1 className="share-main-title">Contac<span className="ride">t Us</span></h1>
        <p className="share-sub-title">The proper business solution for your developing business strategies and corporation</p>
      </div>
      <div className="row">
        <div className="col-md-6 order-2 order-md-1 pt-lg-5 pt-0 ">
          {/* <div className="form-container mt-5 pt-5">
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
          </div> */}
          <div className='contact-form'>
            <div className="contact-form-container">
              <h2 className="form-title">Get in touch</h2>
              <Form>
                <Form.Group className="input-group">
                  <div className="input-icon">
                    <FaUser />
                  </div>
                  <input
                    className="input-field"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="input-group">
                  <div className="input-icon">
                    <FaEnvelope />
                  </div>
                  <input
                    className="input-field"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                </Form.Group>
                <Form.Group className="input-group">
                  <div className="textarea-icon">
                    <FaComment />
                  </div>
                  <textarea
                    className="input-field"
                    rows="6"
                    name="message"
                    placeholder="Message"
                    required
                  />
                </Form.Group>
                <button type="submit" className="contact-submit-button">Send</button>
              </Form>
            </div>
          </div>

        </div>
        <div className="col-md-6 order-1 order-md-2 d-flex align-items-center justify-content-center">
          <img src={contact} alt="" className="img-fluid" />
        </div>
      </div>
    </div >
  );
};

export default Contact;