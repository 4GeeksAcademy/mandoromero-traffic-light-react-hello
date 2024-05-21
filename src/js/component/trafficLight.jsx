import React from "react";
import { useState } from "react";



const trafficLight = () => {
    return
        <div>
            <div id="pole"></div>
            <div id="container">
                <div className="red-light" onClick = {() => this.setState({clickedLight: 'red'})}></div>
                <div className="yellow-light" onClick = {() => this.setState({clickedLight: 'yellow'})}></div>
                <div className="green-light" onClick = {() => this.setState({clickedLight: 'green'})}></div>
            </div>
        </div>

        this.State = {
            clickedLight: null
        };
};


export default trafficLight;