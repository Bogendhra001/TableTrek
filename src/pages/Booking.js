import { addDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import React,{ useState } from "react";
import './interface.css';

import { json } from "react-router-dom";
// import { useNavigate, useNavigation } from "react-router";

// import { useNavigate } from "react-router-dom";



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

    // const slotdetails=[];
    // slotdetails.push(document.getElementById('guest').value);
    // slotdetails.push(document.getElementById('date').value);
    // slotdetails.push(document.getElementById('time').value);

    const navigate=useNavigate();

    // const [value,setValue]= useState([]);

    const [date,setDate]=useState(null);
    const [time,setTime]=useState(null);

    // console.log(date,time);

    function receiveSlotdata(date,time,bookdata){
        // console.log("BB",bookdata);
        bookdata.push(date);
        bookdata.push(time);
        props.passSlotdata(bookdata);
        navigate("/slotselect");
        
    }

    // const navigate = useNavigate();
    const navToHome = () => {
        navigate('/');
    }

    return(
        <div className="bg">
            <div className="sideBar" id="sidebarBox" style={{display:style}} >
            <img className="x-btn" src='x.png' alt="Menu" onClick={hide}></img>
                <p className="menu-btns" onClick={navToHome}>Home</p><p className="menu-btns">Contact Us</p>
            </div>
            <div className="head1"><img className="menu-btn" src='menuW.png' alt="Menu" onClick={show} ></img><div className="head-text1"><h1 >TableTrek</h1></div></div>
            <div className="Container">
                <div className="Restuarant">
                    <img src={props.bookdata[5]} className="imageR"></img>
                    <h1 align="center">{props.bookdata[0]}</h1>
                </div>
                <div className="ff">
                    <form >
                    <label for="date">Date: </label><input type="date" class="date" id="date" onChange={(e)=>setDate(e.target.value)}/><br></br>                    
                    <label for="time">Time:</label><select class="time" onChange={(e)=>setTime(e.target.value)}>
                        <option>select</option>
                        {
                            A.map((i)=>{
                                return(
                                    <option value={8+i}>{8+i}:00</option>
                                )
                            })

                        }
                    </select><br></br><br></br>
                    <button onClick={()=>receiveSlotdata(date,time,props.bookdata)}>Check Availability</button>
                    </form>
                </div>
            </div>
            
            {/* <div className="rImageContainer"><img src="1.jpg" className="rImage"></img></div> */}
        </div>
        )
}
