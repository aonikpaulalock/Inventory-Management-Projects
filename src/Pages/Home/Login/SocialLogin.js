import React from 'react';
import Google from "../../Asset/Login/google-logo-9808.png"
import Facebook from "../../Asset/Login/Facebook-f_Logo-Blue-Logo.wine.svg"
import auth from '../../../Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../Styles/Login/SocialLogin.css"
import CycleLoading from '../../../components/Loading/CycleLoading';
const SocialLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || '/';
  let errorStore;

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <CycleLoading /> ;
  }
  if (error) {
    errorStore = <p className="text-danger">Error: {error?.message}</p>
  }
  if (user) {
    navigate(from, { replace: true })
  }
  return (
    <div className='d-flex my-2'>
      <button className="Provider me-3" onClick={() => signInWithGoogle()}>
        <div>
          <img src={Google} alt="" width={25} height={25} />
          <span className="ms-4">Google</span>
        </div>
      </button>
      <button className="Provider">
        <div className=''>
          <img src={Facebook} alt="" width={25} height={25} />
          <span className="ms-4">Facebook</span>
        </div>
      </button>
      {errorStore}
    </div>
  );
};

export default SocialLogin;