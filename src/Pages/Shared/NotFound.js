import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from "../Asset/Notfound/notFound.png"
import "../Styles/NotFound.css"
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="container notFound-container">
      <div className="row">
        <div className="col-md-6">
          <img src={notFound} alt="" className="img-fluid"/>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="not-found-page">
            <h1>Somethings Went Wrong <span className="error">404</span></h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit et nemo molestias. Commodi cupiditate consequatur omnis, quisquam ut sed!</p>
            <button className="update-button" onClick={()=>navigate("/")}>Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;