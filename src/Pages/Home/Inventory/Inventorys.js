import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../Asset/Hooks/useInventory';
import Inventory from './Inventory';
import CycleLoading from '../../../components/Loading/CycleLoading';

const Inventorys = () => {
  const navigate = useNavigate()
  const [inventorys, loading] = useInventory()

  if (loading) {
    return <CycleLoading />;
  }


  return (
    <div className="container mt-5 pt-5 mb-5">
      <div className="mb-5">
        <h1 className="share-main-title">Available Inven<span className="ride">tories</span></h1>
        <p className="share-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, perferendis!</p>
      </div>
      <div className="row">
        {
          inventorys?.slice(0, 6)?.map(inventory => <Inventory
            key={inventory._id}
            inventory={inventory}
          ></Inventory>)
        }
      </div>
      <div className="d-flex justify-content-end">
        <button className="manage-inventory" onClick={() => navigate("/manageInventory")}>
          Manage Inventory
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-right ms-2 svg-icon me-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Inventorys;