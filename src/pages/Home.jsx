import {React} from "react";
import "../pages/Home.css";
import Image1 from "../assets/kurti1.webp"

function Home(){
    return(
        <>
        <div className="card-container">
            <div className="card-wapper">
                <img src={Image1} alt="" />
            </div>
        </div>
        </>
    );
}

export default Home;