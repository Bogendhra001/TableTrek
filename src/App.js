import './App.css';
import InitialScreen from './pages/initial-screen';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from './pages/admin';
import EditRest from './pages/adminEditRest';
import { useState } from 'react';
import Booking from './pages/Booking';
import NewRest from './pages/adminNewRest';

function App() {

  // const urlPara = new URLSearchParams(window.location.search);
  // const type = urlPara.get("type");

  // console.log(type);

  // const rendPage = () => {}

  const name = "Hello";
  const [data, setData] = useState({});
  const [bookdata,setBookdata]=useState([]);

  const passDatatobooking=(bookdata)=>{
      console.log("real data");
      console.log(bookdata);
      setBookdata(bookdata);
  }
  const passData = (data) => {
    console.log("data");
    setData(data);
}

  return (
    <Router>
      <Routes>
        <Route path='/highprevperson' Component={() => <Admin passData={passData} />} />
        <Route path="/highprevperson/editrest" Component={() => <EditRest data={data} />} /> 
        <Route path='/' Component={() => <InitialScreen  passDatatobooking={passDatatobooking}/>} />
        <Route path="/booking" Component={() => <Booking bookdata={bookdata} />} /> 
        <Route path="/highprevperson/newrest" Component={() => <NewRest />} /> 
      </Routes>
    </Router>
  );
}

export default App;
