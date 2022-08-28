import React from 'react';
import "../Styles/Home/Loading.css"
const Loading = () => {
  return (
      <div className="loading-Container container">
        <div class="spinner-border loading-spnnier" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
  );
};

export default Loading;