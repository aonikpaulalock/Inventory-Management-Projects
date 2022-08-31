import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import Add from "../Asset/Add-Items/Add.png"
import "../Styles/BeUser/AddItems.css"
const AddItems = () => {
  const [user] = useAuthState(auth);
  // Post Data
  const handleAddProduct = async (event) => {
    event.preventDefault()
    // Data Store
    const name = event.target.name.value;
    const description = event.target.description.value;
    const quantity = event.target.quantity.value;
    const price = event.target.price.value;
    const img = event.target.img.value;
    const email = user.email;
    const addUser = { name, description, quantity, price, img, email }

    // Post Data
    await axios.post("https://inventory-management-project-server-aonikpaulalock.vercel.app/inventorys", addUser)
      .then(response => {
        toast.success("Your Product Aded Successfully")
        event.target.reset()
      })
  }
  return (
    <div className="container mt-5 mb-5">
      <div className="mb-5">
        <h1 className="share-main-title">Add Your<span className="ride"> items</span></h1>
        <p className="share-sub-title">The proper business solution for your developing business strategies and corporation</p>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={Add} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <Form className="from-back ms-3 ms-0" onSubmit={handleAddProduct}>
            <input class="input-feild shadow input-feild-2"
              type="email"
              name="email"
              placeholder={user?.email}
              readOnly
            />
            <input
              class="input-feild shadow input-feild-2"
              type="text"
              name="name"
              placeholder="Enter Product Name"
              autoComplete='off'
              required
            />
            <textarea
              type="text"
              rows="6"
              name="description"
              placeholder="Enter Product Description"
              className="input-feild shadow input-feild-2"
              autoComplete='off'
              required
            />

            <input class="input-feild shadow input-feild-2"
              type="number"
              name="quantity"
              placeholder="Enter Product Quantity"
              autoComplete='off'
              required
            />
            <input class="input-feild shadow input-feild-2"
              type="number"
              name="price"
              placeholder="Enter Product Price"
              required
              autoComplete='off'
            />
            <input
              class="input-feild shadow input-feild-2"
              type="text"
              name="img"
              placeholder="Enter Product Image Url"
              autoComplete='off'
              required
            />
            <button type="submit" className="Signup-Button deleverd-button">Add Items</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;