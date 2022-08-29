import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Home/Blogs.css"
const Blogs = () => {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (
    <div className="container my-5">
      <div className="mb-5">
        <h1 className="share-main-title">Our Lat<span className="ride">est Blogs</span></h1>
        <p className="share-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, perferendis!</p>
      </div>
      <div className="row gap-2">
        {
          blogs.map(blog =>
            <div className="col-12" key={blog._id}>
              <div>
                <img src={blog.img} alt="" className="img-fluid" />
              </div>
              <div className="blogs-content">
                <h1>{blog.name}</h1>
                <div className="d-flex justify-content-center align-items-center">
                  <h5 className="blogs-dateCity">{blog.date} </h5>
                  <h5 className="mx-4 text-muted">|</h5>
                  <h5 className="blogs-dateCity">{blog.city}</h5>
                </div>
                <p>{blog.description.slice(0, 400,).concat("...................")}
                  <div className="d-flex justify-content-center">
                    <button className="manage-inventory" onClick={()=>navigate(`/blogs/${blog._id}`)}>
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right ms-2 svg-icon me-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                      </svg>
                    </button>
                  </div>
                </p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Blogs;