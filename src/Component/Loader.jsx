import React from 'react';
import logo from '../assets/images/logo.jpg'; 
// import './Loader.css'; // এই লাইনটি অবশ্যই থাকতে হবে, নাহলে ডিজাইন কাজ করবে না

export default function Loader() {
  return (
    <div className="loader-container">
      {/* শুধুমাত্র লোগো থাকবে, অন্য কোনো ডিভ লাগবে না */}
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>
  );
}   