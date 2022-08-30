import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import SocialLogin from './SocialLogin';
import "../../Styles/Login/LoginSignup.css"
import image from "../../Asset/Login/login.png"
import Loading from '../../Shared/Loading';
const Signup = () => {
  // Hooks
  const navigate = useNavigate()
  const location = useLocation()
  const [error, setError] = useState('')
  const [updateProfile, updating] = useUpdateProfile(auth);
  const from = location?.state?.from?.pathname || '/';
  const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  // Function
  const handleSubmit = async event => {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value
    const confirmPassword = event.target.confirmPassword.value
    console.log(email, password);

    if (password !== confirmPassword) {
      setError("Don't match password")
      return;
    }

    if (password.length < 8) {
      setError(" Minimum type eight charchter ")
      return;
    }

    createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name })
    event.target.reset()
  }

  if (loading || updating) {
    return <Loading />
  }

  if (user) {
    navigate(from, { replace: true })
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 order-2 order-md-1">
          <Form className="form-container" onSubmit={handleSubmit}>
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
          </Form>
        </div>
        <div className="col-md-6 order-1 order-md-2 d-flex  flex-column justify-content-center align-items-center">
          <h5 className="heading-acount">Create Have An Account ?
            <Link to="/signin" className="toggle-form"> Signup</Link>
          </h5>
          <img src={image} alt="" className="img-fluid" />
          <p className="Privacy-policy">By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;