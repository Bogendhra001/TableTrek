import React, { useState } from "react";
import './interface.css';
import "./details.css";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; 

export default function Details(props) {
  const [style, setStyle] = useState('none');
  const [array, setArray] = useState([]);
  // const [resid,setResid]=useState("");
  // const [bookingdate,setBookingdata]=useState();
  // const [bookingtime,setBookingtime]=useState("");
  const [user_name, setName] = useState('');
  const [user_email, setEmail] = useState('');
  const [user_phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const createFieldsInFirestore = async () => {
    try {
      // setResid("2Xxxv1FZJosgBdLZgWVf");
      // setBookingdata(4);
      // setBookingtime("2023-06-19");
      const resid="2Xxxv1FZJosgBdLZgWVf";
      const bookingdate="2023-06-19";
      const bookingtime=14;
      const collectionRef = collection(db, 'booking_details'); // Replace 'your-collection-name' with the actual name of your collection
  
      const data = {
        user_name: user_name,
        user_email: user_email,
        user_phone: user_phone,
        rest_id:resid,
        booking_date:bookingdate,
        booking_time:bookingtime,
        // booking_id:docRef.id,
      };
  
      const docRef = await addDoc(collectionRef, data);
      console.log("done");
      console.log('Document created with ID: ', docRef.id);
    } catch (error) {
      console.error('Error creating document: ', error);
    }
  };

  const hide = () => {
    setStyle('none');
  };

  const show = () => {
    setStyle('block');
  };

  const name = (event) => {
    setName(event.target.value);
    setNameError('');
  };

  const email = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const phone = (event) => {
    setPhone(event.target.value);
    setPhoneError('');
  };

  

  const print = () => {
    const arr = [user_name, user_email, user_phone];
    setArray(arr);
    console.log(arr);
    createFieldsInFirestore();
    passdatatonotification(arr);
  };
  const navigate=useNavigate();
  function passdatatonotification(array){
    props.passDataToNotification(array);
    navigate('/notification');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    let isValid = true;

    if (user_name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (user_email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user_email)) {
      setEmailError('Email is invalid');
      isValid = false;
    }
    
    if (user_phone.trim() === '') {
      setPhoneError('Phone is required');
      isValid = false;
    } else if (!/^\d{10}$/.test(user_phone)) {
      setPhoneError('Phone is invalid');
      isValid = false;
    }

    // If all fields are valid, proceed with form submission
    if (isValid) {
      // Perform form submission or other actions
      console.log('Form submitted:', { user_name, user_email, user_phone });
      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      print();
    }
  };

  return (
    <div className='details_container'>
      <div className="sideBar" id="sidebarBox" style={{ display: style }}>
        <img className="x-btn" src='x.png' alt="Menu" onClick={hide} />
        <p>Home</p><p>Manage Reservations</p><p>About Us</p><p>Contact Us</p>
      </div>
      <div className="head">
        <img className="menu-btn" src='menu.png' alt="Menu" onClick={show} />
        <div className="head-text">
          <h1>TableTrek</h1>
        </div>
      </div>
      <div className="input">
        <form  onSubmit={handleSubmit}>
          <table>
            <tr>
              <td><label htmlFor="name">Name:</label></td>
              <td><input type="text" id="name" name="name" onChange={name} required/>{nameError && <span className="error">{nameError}</span>}</td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email ID:</label></td>
              <td><input type="email" id="email" name="email" onChange={email} required/>{emailError && <span className="error">{emailError}</span>}</td>
            </tr>
            <tr>
              <td><label htmlFor="phone">Phone Number:</label></td>
              <td><input type="tel" id="phone" name="phone" onChange={phone} required/>{phoneError && <span className="error">{phoneError}</span>}</td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Confirm Reserve" onClick={handleSubmit}/></td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}
