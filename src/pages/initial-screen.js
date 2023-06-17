import { addDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";

import Restaurant from "./restraunt_interface";

import React, { useState } from 'react';
import "./initial-screen.css";



export default function InitialScreen(props) {
  const [array, setArray] = useState([]);
  const getData = async () => {
    await getDocs(collection(db, "restaurant_details"))
      .then((query) => {
        const data = query.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const main_array = [];
        for (let i = 0; i < data.length; i++) {
          const array = [];
          array.push(data[i]["rest_name"]);
          array.push(data[i]["cuisine"]);
          array.push(data[i]["opening_hrs"]);
          array.push(data[i]["closing_hrs"]);
          array.push(data[i]["rest_id"]);
          array.push(data[i]["rest_img"]);
          array.push(data[i]["rest_desc"]);
          array.push(data[i]["rest_email"]);
          array.push(data[i]["rest_phone"]);
          array.push(data[i]["rest_rating"]);
          array.push(data[i]["rest_location"]);
          main_array.push(array);
        }
        setArray(main_array);
        console.log(main_array);
      });
  };
 function passdatatobooking (array){
    props.passDatatobooking(array);
  }

  useEffect(() => {
    getData();
  }, []);

  const listItems = array.map((l) => (
    <li key={l[4]} className="list-group-item">
      <div className="list">
        <div className="img">
          <img src="https://th.bing.com/th/id/OIP.5HuchsFg1k7rxtV1fc1VvwHaFf?pid=ImgDet&rs=1" alt="restaurant"></img>
          <div>
            <h3>{l[0]}</h3>
            <p>{l[6]}</p>
            <p>Rating: {l[9]}</p>
            <p>Cuisine: {l[1]}</p>
            <p>Opening hour: {l[2]}</p>
            <p>Closing hour: {l[3]}</p>
            <p>Location: {l[10]}</p>
            <p>Phone no: {l[8]}</p>
            <p>Email: {l[7]}</p>
            <button onClick={() => passdatatobooking(l)}>Reserve</button>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="initial-screen-container">
      <div className="title">TABLE TREK</div>
      <div className="main">
        {array.length > 0 ? (
          <ul className="list-group">
            {listItems}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
        
      </div>
    </div>
  );
}
