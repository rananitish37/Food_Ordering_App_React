import { useContext, useState } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
    const [btnLoginLogout, setBtnLoginLogout] = useState("login");
    const onlineStatus = useOnlineStatus();

    const userData = useContext(UserContext);

    const cartItem = useSelector((store) => store.cart.items);
    console.log(cartItem);

    return(
        <div className="flex justify-between bg-red-100 shadow-lg m-2">
            <div className="logo-containe">
                <img className="w-[120px]" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online status: {onlineStatus === true? "🟢":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 font-bold"><Link to="/cart">Cart ({cartItem.length})</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <button className="px-4" onClick={() =>{
                        if(btnLoginLogout == "login"){
                            setBtnLoginLogout("logout");
                        }else{
                            setBtnLoginLogout("login");
                        }
                    }} >{btnLoginLogout}</button>
                    <li>{userData.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;