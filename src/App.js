import React from 'react';
import Weather from './Component/Weather/weather';
import './App.css';
import HomePage from './Component/HomePage/HomePage';
import NavBar from './Component/Navbar/NavBar';
// import {Router} from 'react-router-dom';
import Router from './Component/Router/Router';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Router/>
        {/* <HomePage/>
        <Weather/> */}
    </div>
  );
}

export default App;
