import React from 'react';
import logo from '../assets/images/logo.jpg'; 

export default function Loader() {
  return (
    <div className="loader-container">
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>
  );
}   