import { useState } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnLoginLogout, setBtnLoginLogout] = useState("login");
    return(
        <div className="header">
            <div className="logo-containe">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() =>{
                        if(btnLoginLogout == "login"){
                            setBtnLoginLogout("logout");
                        }else{
                            setBtnLoginLogout("login");
                        }
                    }} >{btnLoginLogout}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;