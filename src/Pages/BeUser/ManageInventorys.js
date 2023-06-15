import React from 'react';
import { Table } from 'react-bootstrap';
import useInventory from '../Asset/Hooks/useInventory';
import "../Styles/BeUser/ManageInvertories.css"
import ManageInventory from './ManageInventory';
import axios from "axios";
import Swal from 'sweetalert2';
const ManageInventorys = () => {
  const [inventorys, setInventorys] = useInventory()
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
        const url = `https://inventory-update-server.vercel.app/inventory/${id}`
        axios
          .delete(url)
          .then(response => {
            const filterDelete = inventorys.filter(product => product._id !== id)
            setInventorys(filterDelete)
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
    <div className="container mt-5 mb-5">
      <div className="mb-5">
        <h1 className="share-main-title">Manage Inven<span className="ride">tories</span></h1>
        <p className="share-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, perferendis!</p>
      </div>
      <div className="table-responsive">
        <Table borderless bordered className="shadow">
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
              inventorys.map(inventory =>
                <ManageInventory
                  key={inventory._id}
                  inventory={inventory}
                  handleDelete={() => handleDelete(inventory._id)}
                >
                </ManageInventory>)

            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageInventorys;