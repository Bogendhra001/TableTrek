import './App.css';
import InitialScreen from './pages/initial-screen';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from './pages/admin';
import EditRest from './pages/adminEditRest';
import { useState } from 'react';

function App() {

  // const urlPara = new URLSearchParams(window.location.search);
  // const type = urlPara.get("type");

  // console.log(type);

  // const rendPage = () => {}

  const name = "Hello";
  const [data, setData] = useState({});

  const passData = (data) => {
    console.log("data");
    setData(data);
}

  return (
    <Router>
      <Routes>
        <Route path='/highprevperson' Component={() => <Admin passData={passData} />} />
        <Route path="/highprevperson/editrest" Component={() => <EditRest data={data} />} /> 
        <Route path='/' Component={InitialScreen} />
      </Routes>
    </Router>
  );
}

export default App;
