import { React } from "react";
import Navbar from "../widgets/navbar/Navbar";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";

function AppRoute() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<Contact />}/>
          </Routes>

        </Router>
    
    </>
  );
}

export default AppRoute;
