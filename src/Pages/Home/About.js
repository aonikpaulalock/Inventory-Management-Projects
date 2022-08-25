import React from 'react';
import "../Styles/Home/About.css"
import image from "../Asset/Choose/WhyChoose.png"
const abouts = [
  { id: 1, name: "Save Time", des: "Proper Business solution for your developing business strategies and corporation" },
  { id: 2, name: "Affordable Price", des: "Proper Business solution for your developing business strategies and corporation" },
  { id: 3, name: "Available Rides", des: "Proper Business solution for your developing business strategies and corporation" },
]
const About = () => {
  return (
    <div className="container-fluid about-page">
      <div className="container">
        <div className="mb-5 pb-2">
          <h1 className="about-main-title">Why Choose Rent <span className="ride">Ride</span></h1>
          <p className="about-sub-title">The proper business solution for your developing business strategies and corporation</p>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <img src={image} alt="why-choose" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="row gap-5">
              {
                abouts.map(about =>
                  <div className="col-12" key={about.id}>
                    <div className="card border-0 p-4 gap-2 shadow">
                      <div className="d-flex align-items-center justify-content-between">
                        {
                          ((about.name === "Save Time") &&
                            <div className="svg-icons">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#42baf4" class="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                              </svg>
                            </div>) ||
                          ((about.name === "Affordable Price") &&
                            <div className="svg-icons">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#42baf4" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                              </svg>
                            </div>
                          ) ||
                          ((about.name === "Available Rides") &&
                            <div className="svg-icons">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#42baf4" class="bi bi-bicycle" viewBox="0 0 16 16">
                                <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
                              </svg>
                            </div>
                          )
                        }
                        <div className="card-body ms-3">
                          <h5 className="title-about">{about.name}</h5>
                          <p className="text-about">{about.des}</p>
                        </div>
                      </div>
                    </div>
                  </div >
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;