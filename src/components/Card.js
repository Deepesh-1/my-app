import React from "react";
import star from "../images/star.png"

export default function Card(props){
    console.log(props)
    return (
        <div>
            <img src={props.img} />
            <p><img src={star}/> {props.rating}. USA</p>
            <p>{props.message}</p>
            <p><strong>From ${props.price}</strong>/person</p>
        </div>
    )
}
