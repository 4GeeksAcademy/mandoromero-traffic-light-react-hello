import React, { useState, useEffect } from "react";
const TrafficLight = () => {
    const [clickLight, setClickLight] = useState("red");
    const [colors, setColors] = useState(["red", "yellow", "green"]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPurple, setShowPurple] = useState(false);
    const [isCycling, setIsCycling] = useState(false);

    useEffect(() => {
        let interval;
        if (isCycling) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    const nextIndex = (prevIndex + 1) % colors.length;
                    setClickLight(colors[nextIndex]);
                    if (nextIndex === 0) {
                        clearInterval(interval);
                        setIsCycling(false);
                    }
                    return nextIndex;
                });
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isCycling, colors]);
    const cycleLight = () => {
        if (!isCycling) {
            setIsCycling(true);
        }
    };

    const addPurpleLight = () => {
        if (!showPurple) {
            setColors([...colors, "purple"]);
            setShowPurple(true);
        }
    };
    return (
        <div>
            <div id="pole"></div>
            <div id="container">
                <div className={clickLight === "red" ? "glow-red red light" : "red light"}
                    onClick={() => setClickLight("red")}></div>
                <div className={clickLight === "yellow" ? "glow-yellow yellow light" : "yellow light"}
                    onClick={() => setClickLight("yellow")}></div>
                <div className={clickLight === "green" ? "glow-green green light" : "green light"}
                    onClick={() => setClickLight("green")}></div>
                {showPurple && (
                    <div className={clickLight === "purple" ? "glow-purple purple light" : "purple light"}
                        onClick={() => setClickLight("purple")}></div>
                )}
            </div>
            <div className="cycleButton mb-5">
                <button className="cycle-button bg-primary" onClick={cycleLight} disabled={isCycling}>Cycle Light</button>
            </div>
            <div className="purpleButton mt-5">    
                <button className="purple-button" onClick={addPurpleLight} >Add Purple Light</button>    
            </div>
        </div>
    );
};
export default TrafficLight;



