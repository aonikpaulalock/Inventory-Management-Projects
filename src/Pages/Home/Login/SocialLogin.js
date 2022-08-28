import React from 'react';
import Google from "../../Asset/Login/google-logo-9808.png"
import Facebook from "../../Asset/Login/Facebook-f_Logo-Blue-Logo.wine.svg"
import auth from '../../../Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../Styles/Login/SocialLogin.css"
import Loading from '../../Shared/Loading';
const SocialLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/';
  let errorStore;

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <Loading /> ;
  }
  if (error) {
    errorStore = <p className="text-danger">Error: {error?.message}</p>
  }
  if (user) {
    navigate(from, { replace: true })
  }
  return (
    <div>
      <button className="Provider" onClick={() => signInWithGoogle()}>
        <div className='d-flex align-items-center justify-content-center'>
          <img src={Google} alt="" width={25} height={25} />
          <span className="ms-4">Sign up with Google</span>
        </div>
      </button>
      <button className="Provider mt-3">
        <div className='d-flex align-items-center justify-content-center'>
          <img src={Facebook} alt="" width={25} height={25} />
          <span className="ms-4">Sign up with Facebook</span>
        </div>
      </button>
      {errorStore}
    </div>
  );
};

export default SocialLogin;