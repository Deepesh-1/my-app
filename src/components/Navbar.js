import React from "react";
import airbnb from "../images/airbnb.png"

export default function Navbar(){
    return (
        <nav className="Nav">
           <img src={airbnb} className="App-logo"/>
        </nav>
    );
}