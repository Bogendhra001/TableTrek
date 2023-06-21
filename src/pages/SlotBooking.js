import { addDoc, getDocs, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import React,{ useState } from "react";
import './interface.css';

import { useNavigate, useNavigation } from "react-router";


export default function SlotBook(props){

    const [resdata, setResdata] = useState([]);
    const getData = async () => {
        await getDocs(collection(db, "booking_details"))
            .then((query) => {
                const data = query.docs.map((doc) => ({...doc.data(), id:doc.id }));
                setResdata(data);
                console.log("ffetch",resdata);
            })
    }
    useEffect(() => {
        getData();
      }, []);
    // console.log("fetch",resdata);

    const [style, setStyle] = useState('none');
    const hide = () => {
        setStyle('none');
    };
    const show=()=>{
        setStyle('block');
    }

    console.log("slotBooking",props.slotdata);

    console.log(props.slotdata.length);
    console.log(props.slotdata[props.slotdata.length-2],props.slotdata[props.slotdata.length-1]);
    // const [sdata,setSdata]=useState([]);
    // setSdata(props.slotdata);
    var c=props.slotdata[11];
    var flag;
    for(var i=0;i<=resdata.Length;i++){
        if(resdata[i]["booking_time"]==props.slotdata[props.slotdata.length-1] && resdata[i]["booking_date"]==props.slotdata[props.slotdata.length-2]){
            c--;
        }
        if(c>0){
            flag=1;
        }else{
            flag=0;
        }
    }
    console.log(flag);
    let s;
    if(flag==0){
        s="Sorry, No Tables Available for the Selected slot... Kindly Choose another!!!"
    }else{
        s=String(c)+"Table(s) Available in the current Slot... Click below to proceed!!!"
    }

    const navigate=useNavigate();
    function toUser(date,time,rid){
        // console.log("BB",bookdata);
        var cc=[];
        cc.push(date);
        cc.push(time);
        cc.push(rid);
        props.passBookinginfo(cc);
        navigate("/user_details");
        
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
                    <img src={props.slotdata[7]} className="imageR"></img>
                </div>
                <div className="ff">
                    <form >
                    <label for="date">Date:{props.slotdata[props.slotdata.length-2]}</label><br></br>
                    <label for="time">Time:{props.slotdata[props.slotdata.length-1]}:00</label><br></br>
                    <p className="stmt">{s}</p>
                    <button onClick={()=>toUser(props.slotdata[props.slotdata.length-2],props.slotdata[props.slotdata.length-1],props.slotdata[4])}>Book Now!</button>
                    </form>
                </div> 
        </div>
        </div>
        )

}