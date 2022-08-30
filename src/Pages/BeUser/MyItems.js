import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const MyItems = () => {
  const navigate = useNavigate()
  const [myitems, setMyitems] = useState([])
  const [user] = useAuthState(auth)
  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:4000/inventory?email=${email}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMyitems(data)
      })
  }, [user.email])

  // Delete Data
  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:4000/inventory/${id}`
        axios
          .delete(url)
          .then(response => {
            const filterDelete = myitems.filter(product => product._id !== id)
            setMyitems(filterDelete)
          })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <div className="container my-5">
      <div className="mb-5">
        <h1 className="share-main-title">Inventories <span className="ride">Myitems</span></h1>
        <p className="share-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, perferendis!</p>
      </div>
      <div className="table-responsive">
        <Table bordered borderless className="shadow rounded">
          <thead className="table-heading-back">
            <tr className="table-sub-head">
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>

            {
              myitems?.map(item => {
                return (
                  <tr >
                    <td>
                      <img src={item.img} alt="" className="manage-image" />
                    </td>
                    <td>
                      <h6 className="mange-name">{item.name}</h6>
                    </td>
                    <td>
                      <h6 className="mange-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#42baf4" class="bi bi-plus-circle-fill me-md-3 me-2" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" /> </svg>
                        {item.quantity}
                      </h6>
                    </td>
                    <td>
                      <h6 className="mange-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#42baf4" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                          <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                        </svg>
                        {item.price}
                      </h6>
                    </td>
                    <td className="svg-div">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(255, 121, 121)" onClick={() => handleDelete(item._id)} class="bi bi-trash2-fill me-md-4 me-1 svg-icon" viewBox="0 0 16 16">
                        <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" onClick={() => navigate("/addInventory")} fill="#42baf4" class="bi bi-plus-square-fill svg-icon" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                      </svg>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyItems;