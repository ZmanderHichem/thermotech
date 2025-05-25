import React from 'react';
import './Loading.css'; // Optional for styling

const Loading = () => {
  return (
    <div className="loading-container">
      {/* Your company logo */}
      <img src={require('./assets/logo-thermotech.png')} alt="Company Logo" className="logo" />
      <div className="spinner"></div> {/* Optional spinner */}
    </div>
  );
};

export default Loading;
