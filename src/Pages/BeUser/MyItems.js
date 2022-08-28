import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const MyItems = () => {
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
  return (
    <div className="container my-5">
      <div className="mb-5">
        <h1 className="share-main-title">Inventories <span className="ride">Myitems</span></h1>
        <p className="share-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, perferendis!</p>
      </div>
      <Table bordered  borderless className="shadow rounded">
        <thead>
          <tr className='text-center'>
            <th>Image</th>
            <th className="fw-bold">Name</th>
            <th className="fw-bold">Price</th>
            <th className="fw-bold">Quantity</th>
            <th>Delete My Item</th>
          </tr>
        </thead>
        <tbody>

          {
            myitems?.map(item => {
              return (
                <tr key={item._id} className="text-center">
                  <td>
                    <img src={item.img} alt="" className='img-fluid' height={50} width={150} />
                  </td>
                  <td className="text-center fw-bold">{item.name}</td>
                  <td className="text-center fw-bold">{item.quantity}</td>
                  <td className="text-center fw-bold">$ {item.price}</td>
                  <td className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="rgb(255, 121, 121)" class="bi bi-trash2-fill" viewBox="0 0 16 16">
                      <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                    </svg>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default MyItems;