import React from "react";
import { useState } from "react";



const TrafficLight = () => {
    const [clickLight, setClickLight] = useState ("")
    return (
        <div>
            <div id="pole"></div>
            <div id="container">
                <div className={clickLight === "red" ? "glow-red red light" : "red light"} 
                    onClick = {clickLight=== "red" ? () => setClickLight("") : () => setClickLight("red") }></div>
                <div className={clickLight === "yellow" ? "glow-yellow yellow light" : "yellow light"} 
                    onClick = {clickLight === "yellow" ? () => setClickLight("") : () => setClickLight("yellow") }></div>
                <div className={clickLight === "green" ? "glow-green green light" : "green light"} 
                    onClick = {clickLight === "green" ? () => setClickLight("") : () => setClickLight("green") }></div>
            </div>
        </div>
    )
};


export default TrafficLight;