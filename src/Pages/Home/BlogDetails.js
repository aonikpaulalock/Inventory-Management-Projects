import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../Styles/Home/BlogDetails.css"
const BlogDetails = () => {
  const { id } = useParams()
  const [blogDetails, setBlogsDetails] = useState([])
  useEffect(() => {
    fetch(`http://localhost:4000/blog/${id}`)
      .then(res => res.json())
      .then(data => {
        setBlogsDetails(data)
      })
  }, [id])
  return (
    <div className="blogsdetails-container">
      <div className="details-background">
        <div className="blog-head">
          <h6 className="blogs-main-heading">Blogs <span className="ride">Details</span></h6>
          <p className="blogs-sub-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit Dolore.</p>
        </div>
      </div>
      <div className="blog-content">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12">
              <div>
                <img src={blogDetails.img} alt="" className="img-fluid" />
              </div>
              <div className="blogs-content">
                <h1>{blogDetails.name}</h1>
                <div className="d-flex justify-content-center align-items-center">
                  <h5 className="blogs-dateCity">{blogDetails.date} </h5>
                  <h5 className="mx-4 text-muted">|</h5>
                  <h5 className="blogs-dateCity">{blogDetails.city}</h5>
                </div>
                <h6 className="blogs-details-des">{blogDetails.description}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;