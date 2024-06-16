import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useInventory from '../Asset/Hooks/useInventory';
import "../Styles/BeUser/ManageInvertories.css"
import ManageInventory from './ManageInventory';
import axios from "axios";
import Swal from 'sweetalert2';
const ManageInventorys = () => {
  const [inventorys, setInventorys] = useInventory();

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
              inventorys.length ?
                inventorys.map(inventory =>
                  <ManageInventory
                    key={inventory._id}
                    inventory={inventory}
                    handleDelete={() => handleDelete(inventory._id)}
                  >
                  </ManageInventory>
                )
                :
                <tr>
                  <td colSpan="5" className="text-center">
                    <div className="mt-5">
                      <h1 className="display-4 mb-4 fancy-h1">No items to delevered in this account</h1>
                      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="#EE4E4E" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                        <path d="M8 0C3.14 0 0 3.582 0 7.5c0 1.42.57 2.71 1.486 3.635a1.502 1.502 0 0 0 1.867.12c.364-.257.63-.62.746-1.034.148-.498.3-.98.68-1.354.57-.547 1.425-.658 2.1-.31a.75.75 0 1 0 .631-1.36 3.11 3.11 0 0 0-2.5-.612A3.207 3.207 0 0 0 4 7.5c0 1.823 1.653 3.5 4 3.5s4-1.677 4-3.5c0-.568-.147-1.107-.4-1.587a.75.75 0 1 0-1.35.676c.196.327.303.703.303 1.111 0 .945-.785 1.5-1.553 1.5-.56 0-1.067-.28-1.447-.748a2.515 2.515 0 0 1-.777-1.75c0-.832.402-1.572 1.023-2.072.465-.35 1.06-.52 1.724-.52.325 0 .63.04.906.117a.75.75 0 0 0 .787-.636A6.717 6.717 0 0 0 8 1.5c-1.22 0-2.375.332-3.293.917a.75.75 0 1 0 .793 1.274A5.215 5.215 0 0 1 8 2.25c.747 0 1.451.16 2.1.448a.75.75 0 1 0 .785-1.274A6.72 6.72 0 0 0 8 0z" />
                        <path d="M5 10a1 1 0 0 1 2 0H5zM9 10a1 1 0 0 1 2 0H9z" />
                      </svg>
                    </div>
                  </td>
                </tr>
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageInventorys;