import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar.jsx";
import {BrowserRouter as Router } from "react-router-dom";
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      
        <Navbar />
          <AllRoutes/>
        
      
    </div>
  );
}

export default App;
