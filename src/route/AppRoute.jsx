import { React } from "react";
import Home from "../pages/Home";
import About from "../pages/About";

import Navbar from "../widgets/navbar/Navbar";
import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";

function AppRoute() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
           <Route path="/" element={<Home />}/>
           <Route path="/about" element={<About />}/>
          </Routes>

        </Router>
    
    </>
  );
}

export default AppRoute;
