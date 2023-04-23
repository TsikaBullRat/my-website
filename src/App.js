import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./App.phone.css"
import { Nav, Landing, Home, About, Programming, Poetry, Contact } from "./Application";

function App() {

  const [nav, setNav] = useState(false)

  return (
    <Router className="main-body">
      <Nav/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/programming" element={<Programming/>} />
        {/* <Route path="/poetry" element={<Poetry/>} /> */}
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
