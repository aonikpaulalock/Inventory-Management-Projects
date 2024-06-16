import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase.init';
import CycleLoading from '../../components/Loading/CycleLoading';

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <CycleLoading />
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
  }
  return children;
};

export default ProtectedRoute;