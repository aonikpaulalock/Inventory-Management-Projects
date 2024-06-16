import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import SocialLogin from './SocialLogin';
import "../../Styles/Login/LoginSignup.css"
import image from "../../Asset/Login/login.png"
import CycleLoading from '../../../components/Loading/CycleLoading';
const Login = () => {
  // Hooks
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [loginError, setloginError] = useState('')
  const from = location?.state?.from?.pathname || '/';
  const [
    signInWithEmailAndPassword,
    user,
    error,
    loading
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  // Login Function
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password)

    if (password.length < 8) {
      setloginError('Minimum type eight charchter')
      return;
    }
    event.target.reset()
  }
  if (loading) {
    return <CycleLoading />
  }

  if (user) {
    navigate(from, { replace: true })
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordReset = async (e) => {
    await sendPasswordResetEmail(email);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 order-2 order-md-1">
          <Form className="form-container" onSubmit={handleLoginSubmit}>
            <h2 className="signup-heading">Signin Account</h2>
            <Form.Group className="input-name">
              <Form.Control type="email" name="email" placeholder="Enter Email"
                className="input"
                onChange={handleEmail}
                required
                autoComplete='off'
              />
            </Form.Group>
            <Form.Group className="input-name">
              <Form.Control type="password" name="password" placeholder="Password" className="input" required />
            </Form.Group>
            <h6 className='text-center text-danger mt-3 mb-0 fs-5'>{loginError}</h6>
            <button type="submit" className="Signup-Button">Sign In</button>
            <SocialLogin />
            <h6 className="forget-password" onClick={handlePasswordReset}>Forgot Password?</h6>
            <h5 className="text-center text-danger mt-3 mb-0 fs-5">{error?.message}</h5>
          </Form>
        </div>
        <div className="col-md-6 order-1 order-md-2 d-flex  flex-column justify-content-center align-items-center">
          <h5 className="heading-acount">Already have an account  ?
            <Link to="/signup" className="toggle-form"> Signin</Link>
          </h5>
          <img src={image} alt="" className="img-fluid" />
          <p className="Privacy-policy">By signing up, you agree to our Terms & conditions, Privacy policy</p>
        </div>
      </div>
    </div>

  );
};

export default Login;