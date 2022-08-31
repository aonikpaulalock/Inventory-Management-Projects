import React from 'react';
import Service from './Service';
// https://i.ibb.co/bmQxM89/Dolar-1.png
// https://i.ibb.co/r6vSX4S/Service-2.png
const services = [
  { id: 1, name: "Free Shipping", des: "The proper business solution for your developing business strategies and corporation", img: "https://i.ibb.co/T2H2r8D/Service-3.png" },
  { id: 2, name: "Free Delivery", des: "The proper business solution for your developing business strategies and corporation", img: "https://i.ibb.co/z58r4M1/Service-1.png" },
  { id: 3, name: "Price Guarantee", des: "The proper business solution for your developing business strategies and corporation", img: "https://i.ibb.co/bmQxM89/Dolar-1.png" },
]

const Services = () => {
  return (
    <div className="container my-5 py-5">
      <div className="mb-5 pb-2">
        <h1 className="share-main-title">Our Best <span className="ride">Services</span></h1>
        <p className="share-sub-title">The proper business solution for your developing business strategies and corporation</p>
      </div>
      <div className="row">
        {
          services.map(service => <Service
            key={service._id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;