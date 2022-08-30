import React from 'react';

import { useNavigate } from 'react-router-dom';
const ManageInventory = ({ inventory, handleDelete }) => {
  const navigate = useNavigate()
  const { _id, name, img, price, quantity } = inventory;
  return (
    <tr>
      <td>
        <img src={img} alt="" className="manage-image" />
      </td>
      <td>
        <h6 className="mange-name">{name}</h6>
      </td>
      <td>
        <h6 className="mange-details">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#42baf4" class="bi bi-plus-circle-fill me-md-3 me-2" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" /> </svg>
          {quantity}
        </h6>
      </td>
      <td>
        <h6 className="mange-details">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#42baf4" class="bi bi-currency-dollar" viewBox="0 0 16 16">
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
          </svg>
          {price}
        </h6>
      </td>
      <td className="svg-div">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(255, 121, 121)" onClick={() => handleDelete(_id)} class="bi bi-trash2-fill me-md-4 me-1 svg-icon" viewBox="0 0 16 16">
          <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#42baf4" onClick={() => navigate("/addInventory")} class="bi bi-plus-square-fill  svg-icon" viewBox="0 0 16 16">
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
        </svg>
      </td>
    </tr>
  );
};

export default ManageInventory;