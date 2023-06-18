
import { useEffect } from "react";
import React,{ useState } from "react";
import './interface.css';
import "./details.css";

export default function Details(props){
    const [style, setStyle] = useState('none');

    const[user_name,setName]=useState('');

    const[user_email,setEmail]=useState('');

    const[user_phone,setPhone]=useState('');

    const hide = () => {
        setStyle('none');
    };
    const show=()=>{
        setStyle('block');
    }

    const name = (event) => {
        setName(event.target.value);
      };

    const email = (event) => {
        setEmail(event.target.value);
      };
    const phone = (event) => {
        setPhone(event.target.value);
      };
    

    return(
        <div class='details_container'>
            <div class="sideBar" id="sidebarBox" style={{display:style}}>
                <img class="x-btn" src='x.png' alt="Menu" onClick={hide}></img>
                <p>Home</p><p>Manage Reservations</p><p>About Us</p><p>Contact Us</p>
            </div>
            <div class="head"><img class="menu-btn" src='menu.png' alt="Menu" onClick={show} ></img><div class="head-text"><h1>TableTrek</h1></div></div>
            <div className="input">
                <form>
                    <table>
                        <tr>
                        <td><label for="name">Name:</label></td>
                        <td><input type="text" id="name" name="name" onChange={name} required/></td>
                        </tr>
                        <tr>
                        <td><label for="email">Email ID:</label></td>
                        <td><input type="email" id="email" name="email" onChange={email} required/></td>
                        </tr>
                        <tr>
                        <td><label for="phone">Phone Number:</label></td>
                        <td><input type="tel" id="phone" name="phone"  onChange={phone} required/></td>
                        </tr>
                        <tr>
                        <td></td>
                        <td><input type="submit" value="Confirm Reserve" onClick="{}"/></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
        )
}