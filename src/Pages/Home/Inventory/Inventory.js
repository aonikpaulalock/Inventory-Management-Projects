import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../../Styles/Home/Inventories/Inventory.css"
const Inventory = ({ inventory }) => {
  const navigate = useNavigate()
  const { _id, name, img, price, quantity, description } = inventory;

  return (
    <div className="col-lg-4 col-md-6 ">
      <Card className="border-0 shadow p-2 mb-5">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <h5 className="inventory-name">{name}</h5>
          <Card.Text className="inventory-des">
            {description}
          </Card.Text>
          <div className='d-flex align-items-center justify-content-between my-2 mb-4'>
            <h5 className="inventory-price">Price: $ {price}</h5>
            <h6 className="inventory-price">Quantity : {quantity}</h6>
          </div>
          <div className="">
            <button className="update-button" onClick={() => navigate(`/inventory/${_id}`)}>Update</button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inventory;