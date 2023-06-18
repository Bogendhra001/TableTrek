import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./notification.css"



const Confirmation = (props) => {
  

  return (
    <div className="reservation-confirmation">
  <div className="tick-mark">&#10004;</div>
  {/* <img src="paytm-logo.png" alt="Paytm Logo" className="paytm-logo" /> */}
  <h2>Reservation Confirmed!</h2>
  <p>Table reserved at Reboot</p>
  <p>On xx-xx-xxxx at 00:00</p>
  <p>booking id -XXXXXXXXXX</p>
  <p>Your reservation has been successfully booked.</p>
  <p>Confirmation Number: <span className="confirmation-number">ABC123</span></p>
  <p>Thank you for choosing our service name.</p>
  <button className="print-button" onClick={window.print}>Print Confirmation</button>
  </div>
  );
};

export default Confirmation;

    

  