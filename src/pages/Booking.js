import { addDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import React,{ useState } from "react";
import './interface.css';
import { json } from "react-router-dom";


export default function Booking(props){

    const [style, setStyle] = useState('none');
    const hide = () => {
        setStyle('none');
    };
    const show=()=>{
        setStyle('block');
    }

    const A=[];
    function timeA(){
        for(var i=0; i<=14 ;i++){
            A.push(i);
        }
    }
    timeA();

    // const [items, setItems] = useState([]);

    // useEffect(() => {
    // localStorage.setItem('items', JSON.stringify(props.bookdata));
    // }, [items]);


    // 
    if(props.bookdata.Length!=0){
        window.localStorage.setItem('main',JSON.stringify(props.bookdata));
        // console.log(window.localStorage(getItem('main')));
    }


    return(
        <div className="bg">
            <div className="sideBar" id="sidebarBox" style={{display:style}} >
            <img className="x-btn" src='x.png' alt="Menu" onClick={hide}></img>
                <p>Home</p><p>Manage Reservations</p><p>About Us</p><p>Contact Us</p>
            </div>
            <div className="head1"><img className="menu-btn" src='menuW.png' alt="Menu" onClick={show} ></img><div className="head-text1"><h1 >TableTrek</h1></div></div>
            <div className="Container">
                <div className="Restuarant">
                    <img src="reboot.jpg" className="imageR"></img>
                    <h1 align="center">{props.bookdata[0]}</h1>
                </div>
                <div className="ff">
                    <form >
                    <label for="date">Date: </label><input type="date" class="date" id="date"/><br></br>
                    <label for="number">Guests:</label>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <br></br>
                    <label for="time">Time:</label><select class="time">
                        {
                            A.map((i)=>{
                                return(
                                    <option value={i}>{8+i}:00</option>
                                )
                            })

                        }
                    </select><br></br><br></br>
                    <button onClick='{}'>Check Availability</button>
                    </form>
                </div>
            </div>
            
            {/* <div className="rImageContainer"><img src="1.jpg" className="rImage"></img></div> */}
        </div>
        )
}