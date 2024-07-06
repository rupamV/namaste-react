import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnname, setbtnname] = useState("login");
    return (
        <div className="bg-gray-800 text-white p-4 shadow-xl">
            <div className="container mx-auto flex justify-between items-center"> 
                <div className="logo flex items-center"> 
                    <img
                        src={LOGO_URL}
                        alt="App Logo"
                        className="max-h-14"
                    />
                </div>
                <div className="navbar">
                    <ul className="flex space-x-4 items-center"> 
                        <li><Link to='/' className="hover:text-gray-300">Home</Link></li>
                        <li><Link to='/about' className="hover:text-gray-300">About Us</Link></li>
                        <li><Link to='/contact' className="hover:text-gray-300">Contact Us</Link></li>
                        <li><Link to='/cart' className="hover:text-gray-300">Cart</Link></li>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
                            btnname === "login" ? setbtnname("logout") : setbtnname("login");
                        }}>{btnname}</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Header;