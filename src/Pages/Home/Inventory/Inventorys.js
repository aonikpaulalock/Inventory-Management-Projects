import React from 'react';
import useInventory from '../../Asset/Hooks/useInventory';
import Inventory from './Inventory';

const Inventorys = () => {
 const [inventorys] = useInventory()
  return (
    <div className="container mt-5 pt-5 mb-5">
      <div className="mb-5">
        <h1 className="share-main-title">Available Inven<span className="ride">tories</span></h1>
        <p className="share-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, perferendis!</p>
      </div>
      <div className="row">
        {
          inventorys?.slice(0,6)?.map(inventory => <Inventory
          key={inventory._id}
          inventory={inventory}
          ></Inventory>)
        }
      </div>
    </div>
  );
};

export default Inventorys;