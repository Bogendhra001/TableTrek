import { addDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import React,{ useState } from "react";
import './interface.css';
import { json } from "react-router-dom";

export default function SlotBook(props){
    const [style, setStyle] = useState('none');
    const hide = () => {
        setStyle('none');
    };
    const show=()=>{
        setStyle('block');
    }
    return(
        <div className="bg">
            <div className="sideBar" id="sidebarBox" style={{display:style}} >
            <img className="x-btn" src='x.png' alt="Menu" onClick={hide}></img>
                <p>Home</p><p>Manage Reservations</p><p>About Us</p><p>Contact Us</p>
            </div>
            <div className="head1"><img className="menu-btn" src='menuW.png' alt="Menu" onClick={show} ></img><div className="head-text1"><h1 >TableTrek</h1></div></div>
        </div>
        )

}