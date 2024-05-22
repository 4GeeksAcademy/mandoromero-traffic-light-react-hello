import React from "react";
import { useState } from "react";



const TrafficLight = () => {
    const[clickLight, setClickLight] = useState("")
    return (
        <div>
            <div id="pole"></div>
            <div id="container">
                <div className={clickLight==="red"?"glow red light":"red light"} 
                    onClick = {clickLight==="red"?()=>setClickLight(""):()=>setClickLight("red") }></div>
                <div className="yellow-light" onClick = {() => this.useState({clickedLight: 'yellow'})}></div>
                <div className="green-light" onClick = {() => this.useState({clickedLight: 'green'})}></div>
            </div>
        </div>

    )
};


export default TrafficLight;