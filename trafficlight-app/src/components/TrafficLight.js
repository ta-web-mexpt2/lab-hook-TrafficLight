import React, { useState } from "react";
import Light from "./Light";

const TrafficLight = () => {
    const [activeColor, setActiveColor] = useState("green");

    const changeColor = () => {
        if (activeColor === "green") {
            setActiveColor("yellow")
        }
        if (activeColor === "yellow") {
            setActiveColor("red")
        }
        if (activeColor === "red") {
            setActiveColor("green")
        }
    }

    setInterval(changeColor, 5000);

    return (
        <div>
            <h1>Iron Light</h1>
            <div className="traffic-light">
                <Light color="red" active={activeColor === "red" ? "active" : ""} />
                <Light color="yellow" active={activeColor === "yellow" ? "active" : ""} />
                <Light color="green" active={activeColor === "green" ? "active" : ""} />
            </div>
        </div>
    )
}

export default TrafficLight;