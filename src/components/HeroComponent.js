import React from "react";
import photgrid from "../images/photo-grid.png"
export default function HeroComponent(){
    return (
        <div className="Hero">
            <img src={photgrid} className="Hero-photogrid"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}