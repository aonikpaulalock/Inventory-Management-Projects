import React from 'react';
import { Table } from 'react-bootstrap';
import useInventory from '../Asset/Hooks/useInventory';
import "../Styles/BeUser/ManageInvertories.css"
import ManageInventory from './ManageInventory';
const ManageInventorys = () => {
  const [inventorys] = useInventory()
  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="mb-5">
        <h1 className="share-main-title">Manage Inven<span className="ride">tories</span></h1>
        <p className="share-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, perferendis!</p>
      </div>
      <div className="table-responsive">
        <Table borderless>
          <thead className="table-heading-back">
            <tr className="table-sub-head">
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {
              inventorys.map(inventory =>
                <ManageInventory
                  key={inventory.id}
                  inventory={inventory}>
                </ManageInventory>)

            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageInventorys;