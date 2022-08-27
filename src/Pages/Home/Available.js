import React from 'react';
import app from "../Asset/Available app/app.png"
import "../Styles/Home/Available.css"
const Available = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <div className="col-lg-6">
          <img src={app} alt="" className='img-fluid' />
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div className="mt-5">
            <h1 className="app-heading">Rent<span className="ride">Ride</span> App Available in Android & iOS</h1>
            <p className="app-text">The proper business solution for your developing business strategic and corporation</p>
            <form class="d-flex me-3" role="search">
              <input class="input-feild shadow" type="search" placeholder="Search" aria-label="Search"/>
                <button class="link-button" type="submit">Send Link</button>
            </form>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Available;