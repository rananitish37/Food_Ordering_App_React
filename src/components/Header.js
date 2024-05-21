import { lazy, useState } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {
    const [btnLoginLogout, setBtnLoginLogout] = useState("login");
    const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            <div className="logo-containe">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Online status: {onlineStatus === true? "🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><Link to="/grocery">Grocery</Link></li>
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