import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import "../../Styles/Home/InventoryDetails/InventoryDetails.css"
import axios from "axios";
import { Card, Form } from 'react-bootstrap';
import auth from '../../../Firebase.init';
const InventoryDetails = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const { id } = useParams()
  const [details, setDetails] = useState([]);
  const [reload, setReload] = useState(false)
  const [decrease, setDecrease] = useState(details.quantity)
  useEffect(() => {
    fetch(`https://inventory-management-project-server-aonikpaulalock.vercel.app/inventory/${id}`)
      .then(res => res.json())
      .then(data => {
        setDetails(data)
        setDecrease(data.quantity)
      })
  }, [id, reload])

  const handleDelevered = () => {
    const quantity = decrease - 1;
    axios.put(
      `https://inventory-management-project-server-aonikpaulalock.vercel.app/inventory/${id}`, {
      quantity
    })
      .then(response => {
        setReload(!reload)
      })
  }

  const handleAddQuantity = async (event) => {
    event.preventDefault()
    const newQuantity = event.target?.number?.value;
    console.log(newQuantity)
    const quantity = parseInt(newQuantity) + parseInt(details?.quantity)
    await axios.put(`https://inventory-management-project-server-aonikpaulalock.vercel.app/inventory/${id}`, {
      quantity,
    })
      .then(response => {
        setReload(!reload)
      })
  }

  return (
    <div className="container mt-5 mb-5">
      <div>
        <h1 className="share-main-title">Inven<span className="ride">tories</span> Det<span className="ride">ails</span></h1>
        <p className="share-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, perferendis!</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Card className="border-0 p-2 mb-md-0 mb-5">
            <Card.Img variant="top" src={details.img} className="w-75 mx-auto" />
            <Card.Body>
              <h5 className="details-name">{details.name}</h5>
              <Card.Text className="details-description">
                {details.description}
              </Card.Text>
              <div className='d-flex align-items-center justify-content-between my-2 mb-4'>
                <h5 className="details-price">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#42baf4" class="bi bi-currency-dollar me-3" viewBox="0 0 16 16">
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                  </svg>
                  {details.price}</h5>
                <h6 className="details-quantity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#42baf4" class="bi bi-plus-circle-fill me-5" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" /> </svg>
                  {details.quantity}</h6>
              </div>
              <div className="d-flex justify-content-between mt-5">
                <button className="update-button" onClick={handleDelevered}>Deleverd</button>
                <button className="update-button" onClick={()=>navigate("/manageInventory")}>Manage</button>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5  offset-md-1  d-flex justify-content-center align-items-center">
          <div className="form-background">
            <Form onSubmit={handleAddQuantity}>
              <input
                class="input-feild shadow input-feild-2"
                type="text"
                placeholder={user?.displayName} 
                readOnly
                />
              <input class="input-feild shadow input-feild-2"
                type="email"
                placeholder={user?.email}
                readOnly
              />
              <input class="input-feild shadow input-feild-2"
                type="number"
                name="number"
                placeholder="Enter Quantity"
                autoComplete='off' 
                />
            <button type="submit" className="Signup-Button deleverd-button">Delevered</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;