import { React } from "react";
import "../pages/Home.css";
// import Image1 from "../assets/kurti1.webp";
import Data from "../data/Data";

function Home() {
    
  return (
    <>
      {/* <div className="card-container">
            <div className="card-wapper">
                <img src={Image1} alt="" />
                <div className="home-card">
                <p className="card-para">Queen Fab Printed Anarkali Kurta.</p>
                <span className="card-rate">₹568</span>
                <p className="card-offer"><span style={{fontWeight:"bold"}}>₹493</span> with UPI offe + more</p>
                </div>
            </div>
        </div> */}
        < div className="card-container ">
      {Data.map((ram) =>( 
        <div className="card-wapper">
          <img src={ram.image} alt={ram.title} />{ram.title}
          <div className="home-card">
            <p className="card-para">Queen Fab Printed Anarkali Kurta.</p>
            <span className="card-rate">₹568</span>
            <p className="card-offer">
              <span style={{ fontWeight: "bold" }}>₹493</span> with UPI offe +
              more
            </p>
          </div>
        </div>
      
))}
</div>
    </>
  );
}

export default Home;
