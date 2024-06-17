import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import SocialLogin from './SocialLogin';
import "../../Styles/Login/LoginSignup.css";
import image from "../../Asset/Login/signup2.png";
import CycleLoading from '../../../components/Loading/CycleLoading';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
const Signup = () => {
  // Hooks
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const from = location?.state?.from?.pathname || '/';
  const [createUserWithEmailAndPassword, user, loading, createError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // Function
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least eight characters long");
      return;
    }

    try {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      navigate(from, { replace: true });
      toast.success("Signup successfully!")
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading || updating) {
    return <CycleLoading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container sm-my-4 my-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 order-2 order-md-1">
          <Form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-container p-sm-4 p-0">
              <h2 className="form-title">Create an account</h2>
              <Form.Group className="input-group">
                <div className="input-icon">
                  <FaUser />
                </div>
                <input
                  className="input-field w-100"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="input-group">
                <div className="input-icon">
                  <FaEnvelope />
                </div>
                <input
                  className="input-field w-100"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                  autoComplete="off"
                />
              </Form.Group>
              <div className='d-md-flex'>
                <Form.Group className="input-group me-3">
                  <div className="input-icon">
                    <FaLock />
                  </div>
                  <input
                    className="input-field w-100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <Form.Group className="input-group">
                  <div className="input-icon">
                    <FaLock />
                  </div>
                  <input
                    className="input-field w-100"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>
              </div>
              <h6 className='text-center text-danger mt-2 mb-0 fs-5 font-weight-bold'>{error || createError?.message || updateError?.message}</h6>
              <button type="submit" className="contact-submit-button">Sign Up</button>
              <SocialLogin />
              <div className='text-center'>
                <h5 className="forget-password">Already have an account?
                  <Link to="/signin" className="toggle-form"> Sign In</Link>
                </h5>
              </div>
              <p className="Privacy-policy">By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
          </Form>
        </div>
        <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center">
          <img src={image} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Signup;





          {/* <Form className="form-container" onSubmit={handleSubmit}>
            <h2 className="signup-heading">Create Account</h2>
            <Form.Group className="input-name">
              <Form.Control type="text" name="name" placeholder="Your Name"
                className="input"
                required
                autoComplete='off'
              />
            </Form.Group>
            <Form.Group className="input-name">
              <Form.Control type="email" name="email" placeholder="Enter Email"
                className="input"
                required
                autoComplete='off'
              />
            </Form.Group>
            <Form.Group className="input-name">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                className="input"
                required />
            </Form.Group>
            <Form.Group className="input-name">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input"
                required />
            </Form.Group>
            <h6 className='text-center text-danger mt-3 mb-0 fs-5'>{error}</h6>
            <button type="submit" className="Signup-Button">Sign up</button>
            <SocialLogin />
          </Form> */}