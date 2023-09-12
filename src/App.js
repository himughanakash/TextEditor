import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  <Router>
    <Routes>
      <Route path="/about" element={<About/>}>

      </Route>
    </Routes>
  </Router>

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      {/*  <Navbar title="TextEditor" aboutText="About Us" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextEditor" mode ={mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/> 
      <div className = "container my-3">
      <TextForm showAlert = {showAlert} heading = "Enter the text to convert" mode = {mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;

