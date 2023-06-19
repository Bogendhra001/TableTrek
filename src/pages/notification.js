import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./notification.css"



const Confirmation = (props) => {
  
  console.log("in notification",props.bookdata);
  console.log(props.userdata);
  return (
    <div className="reservation-confirmation">
  <div className="tick-mark">&#10004;</div>
  {/* <img src="paytm-logo.png" alt="Paytm Logo" className="paytm-logo" /> */}
  <h2>Reservation Confirmed!</h2>
  <p>Table reserved at {props.bookdata[0]}</p>
  <p>On {props.userdata[0]} at {props.userdata[2]}:00</p>
  <p>Your reservation has been successfully booked.</p>
  <p>Booking ID: <span className="confirmation-number">{props.userdata[1]}</span></p>
  <p>Thank you for choosing our service {props.userdata[3]}.</p>
  <button className="print-button" onClick={window.print}>Print Confirmation</button>
  </div>
  );
};

export default Confirmation;

    

  