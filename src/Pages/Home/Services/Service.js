import React from 'react';
import "../../Styles/Home/Services.css"
const Service = ({service}) => {
  const {name,des,img} = service ;
  return (
    <div className="col-lg-4 mt-5 col-md-6">
      <div className="card border-0 shadow hover-service-card">
        <img className="card-img-top w-75 px-5 mx-auto" src={img} alt="" />
        <div className="card-body px-5">
          <h5 className="service-name">{name}</h5>
          <p className="service-des">{des}</p>
        </div>
      </div>
    </div >
  );
};

export default Service;