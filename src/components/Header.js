import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";


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
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <button className="btn" onClick={()=>{
                    btnname==="login" ? setbtnname("logout") : setbtnname("login");
                }}>{btnname}</button>
            </ul>
        </div>
    </div>
)};

export default Header;