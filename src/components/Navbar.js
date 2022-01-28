import React from "react";
import AirbnbLogo from "../images/airbnb.jpg"

export default function Navbar(){
    return (
        <nav className="navbar">
            <img src={AirbnbLogo} className="nav--logo" alt="Airbnb" />
        </nav>
    )
}
