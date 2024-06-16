import React from 'react';
import loadingGif from '../../Pages/Asset/logo/loading.gif';
import "../../components/Loading/CycleLoading.css"
const CycleLoading = () => {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="Loading..." className="loading-gif" />
    </div>
  );
};

export default CycleLoading;