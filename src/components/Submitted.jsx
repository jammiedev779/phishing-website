import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../style/style.css'; 

export default function submitted() {
  return (
    <div className="thank-you-page">  
    <div class = "check"><i className="fa fa-check-circle "></i></div>
      <h1>Thank you for information</h1>
      <h3>
        <p>Your information has been received.<br />We will update you shortly.</p>
      </h3>
      <h2>Connect with us</h2>
      <div className="social">
        <i class="fa fa-solid fa-comment"></i>
        <i class="fa fa-brands fa-instagram"></i>
        <i class="fa fa-brands fa-twitter" ></i>
        <i class="fa fa-brands fa-linkedin" ></i>
      </div>
    </div>
  );
}