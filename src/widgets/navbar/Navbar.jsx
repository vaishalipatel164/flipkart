import { React } from "react";
import "./Navbar.css";
import Logo from "../../assets/flipkart-logo.png";
import Logo1 from "../../assets/flipkart-travel.png";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wapper">
          <div className="image-flex">
            <div className="navbar-logo1">
              <img src={Logo} alt="" />
            </div>
            <div className="navbar-logo2">
              <img src={Logo1} alt="" />
            </div>
          </div>
        <div className="navbar-list">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/cart">Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
