import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import SocialLogin from './SocialLogin';
import "../../Styles/Login/LoginSignup.css";
import image from "../../Asset/Login/login3.png";
import CycleLoading from '../../../components/Loading/CycleLoading';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';
const Login = () => {
  // Hooks
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState('');
  const from = location?.state?.from?.pathname || '/';
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  // Login Function
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (password.length < 8) {
      setLoginError('Password must be at least eight characters long');
      return;
    }

    try {
      await signInWithEmailAndPassword(email, password);
      event.target.reset();
      toast.success("Login successfully!")
    } catch (err) {
      setLoginError(err.message);
    }
  };

  if (loading) {
    return <CycleLoading />;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordReset = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      alert('Password reset email sent');
    } else {
      setLoginError('Please enter your email address to reset password');
    }
  };

  return (
    <div className="container sm-my-4 my-3">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 order-2 order-md-1">
          <Form className="contact-form" onSubmit={handleLoginSubmit}>
            <div className="contact-form-container p-sm-4 p-0">
              <h2 className="form-title">Sign In</h2>
              <Form.Group className="input-group">
                <div className="input-icon">
                  <FaEnvelope />
                </div>
                <input
                  className="input-field w-100"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleEmail}
                  required
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group className="input-group">
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
              <h6 className="text-center font-weight-bold text-danger mt-2 mb-0 fs-5">{loginError}</h6>
              <button type="submit" className="contact-submit-button">Sign In</button>
              <SocialLogin />
              <div className='d-flex justify-content-between align-items-center'>
                <h6 className="forget-password" onClick={handlePasswordReset}>Forgot Password?</h6>
                <h5 className="forget-password">Don't have an account?
                  <Link to="/signup" className="toggle-form"> Sign Up</Link>
                </h5>
              </div>
              <h5 className="text-center font-weight-bold text-danger mt-2 mb-0 fs-5">{error?.message}</h5>
              <p className="Privacy-policy">By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
          </Form>
        </div>
        <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center align-items-center">
          <div className='w-100'>
            <img src={image} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
