import { addDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import React,{ useState } from "react";
import './interface.css';


export default function Booking(props){

    const getData = async () => {
        await getDocs(collection(db, "restaurant_details"))
            .then((query) => {
                const data = query.docs.map((doc) => ({...doc.data(), id:doc.id }));
                console.log(data)
            })
    }

    useEffect( () => {
        getData();
    }, [] )

    const [style, setStyle] = useState('none');
    const hide = () => {
        setStyle('none');
    };
    const show=()=>{
        setStyle('block');
    }
    
    console.log("Booking Screen",props.bookdata);

    return(
        <div>
            <div class="sideBar" id="sidebarBox" style={{display:style}}>
            <img class="x-btn" src='x.png' alt="Menu" onClick={hide}></img>
                <p>Home</p><p>Manage Reservations</p><p>About Us</p><p>Contact Us</p>
            </div>
            <div class="head"><img class="menu-btn" src='menu.png' alt="Menu" onClick={show} ></img><div class="head-text"><h1>TableTrek</h1></div></div>
            
            {/* <div class="rImageContainer"><img src="1.jpg" class="rImage"></img></div> */}
        </div>
        )
}