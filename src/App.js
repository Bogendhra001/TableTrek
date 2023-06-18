import './App.css';
import InitialScreen from './pages/initial-screen';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from './pages/admin';
import EditRest from './pages/adminEditRest';
import { useState } from 'react';
import Booking from './pages/Booking';
import Details from './pages/user_details';
import NewRest from './pages/adminNewRest';
import Confirmation from './pages/notification';



function App() {

  // const urlPara = new URLSearchParams(window.location.search);
  // const type = urlPara.get("type");

  // console.log(type);

  // const rendPage = () => {}

  const name = "Hello";
  const [data, setData] = useState({});
  const [bookdata,setBookdata]=useState([]);
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

  return (
    <Router>
      <Routes>
        <Route path='/user_details' Component={() => <Details passDataToNotification={passDataToNotification}/>}/>
        <Route path='/highprevperson' Component={() => <Admin passData={passData} />} />
        <Route path="/highprevperson/editrest" Component={() => <EditRest data={data} />} /> 
        <Route path='/' Component={() => <InitialScreen  passDatatobooking={passDatatobooking}/>} />
        <Route path="/booking" Component={() => <Booking bookdata={bookdata} />} /> 
        <Route path="/highprevperson/newrest" Component={() => <NewRest />} /> 
        <Route path='/notification' Component={() => <Confirmation userdata={userdata}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
