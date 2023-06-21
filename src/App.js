import './App.css';
import InitialScreen from './pages/initial-screen';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from './pages/admin';
import EditRest from './pages/adminEditRest';
import { useState } from 'react';
import Booking from './pages/Booking';
import Details from './pages/user_details';
import NewRest from './pages/adminNewRest';

import SlotBook from './pages/SlotBooking';

import Confirmation from './pages/notification';



function App() {

  // const urlPara = new URLSearchParams(window.location.search);
  // const type = urlPara.get("type");

  // console.log(type);

  // const rendPage = () => {}

  const name = "Hello";
  const [data, setData] = useState({});
  const [bookdata,setBookdata]=useState([]);

  const [sdata,setSdata]=useState([]);
  const [bdata,setBdata]=useState([]);
  const [userdata,setUserdata]=useState([]);


  const passDatatobooking=(bookdata)=>{
      console.log("real data");
      console.log(bookdata);
      setBookdata(bookdata);
  }
  const passData = (data) => {
    console.log("data");
    setData(data);
}
  const passDataToNotification=(userdata)=>{     //Data for notifications
    setUserdata(userdata);
    console.log("app.js",userdata);
  }

const passSlotdata=(sdata)=>{
  setSdata(sdata);
  console.log('App.js',sdata);
}

const passBookinginfo=(bdata)=>{
  console.log("booking_data",bdata);
  setBdata(bdata);

}

console.log("Bdata",bdata);

  return (
    <Router>
      <Routes>
        <Route path='/user_details' Component={() => <Details bdata={bdata} passDataToNotification={passDataToNotification}/>}/>
        <Route path='/highprevperson' Component={() => <Admin passData={passData} />} />
        <Route path="/highprevperson/editrest" Component={() => <EditRest data={data} />} /> 
        <Route path='/' Component={() => <InitialScreen  passDatatobooking={passDatatobooking}/>} />
        <Route path="/booking" Component={() => <Booking bookdata={bookdata} passSlotdata={passSlotdata}/>} /> 
        <Route path="/slotselect" Component={()=><SlotBook slotdata={sdata} passBookinginfo={passBookinginfo}/>}/>
        <Route path="/highprevperson/newrest" Component={() => <NewRest />} /> 
        <Route path='/notification' Component={() => <Confirmation userdata={userdata} bookdata={bookdata}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
