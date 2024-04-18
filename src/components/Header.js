import { LOGO_URL } from "../utils/constants";
import { useState } from "react";


const Header =() =>{
    const [btnname,setbtnname]=useState("login");
    return(
    <div className="header">
        <div className="logo"> 
        <img
          src={LOGO_URL}
          alt="App Logo"
          className="logo"
        />
        </div>
        <div className="navbar">
            <ul className="list">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="btn" onClick={()=>{
                    btnname==="login" ? setbtnname("logout") : setbtnname("login");
                }}>{btnname}</button>
            </ul>
        </div>
    </div>
)};

export default Header;