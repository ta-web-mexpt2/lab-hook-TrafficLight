import React, { useState, useEffect } from "react";
import Light from "./Light";

const TrafficLight = () => {

    const [ redActive, setRedActive ] = useState(false);
    const [ yellowActive, setYellowActive ] = useState(false);
    const [ greenActive, setGreenActive ] = useState(false);

    useEffect(() => {
        let step = 0;
        const timerId = setInterval(() => {
            step += 1;
            if (step > 15) step = 1;
            // Verde se apaga en 6 y se enciende en 1
            if(step === 6 ) setGreenActive(false);
            if(step === 1) setGreenActive(true);
            // Rojo se apaga en 1 y se enciende en 11
            if(step === 1 ) setRedActive(false);
            if(step === 12) setRedActive(true);
            // Amarillo se enciente en 6, 8 y 10, se apaga en 7, 9 y 11
            if([6, 8, 10].includes(step)) setYellowActive(true);
            if([7, 9, 11].includes(step)) setYellowActive(false);
        }, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div style={{
            width: "120px",
            padding: "5px",
            margin: "5px",
            backgroundColor: "#888",
            border: "dashed 1px #666",
            display: "inline-bock"
        }}>
            <Light color="red" active={redActive} />
            <Light color="yellow" active={yellowActive} />
            <Light color="green" active={greenActive} />
        </div>
    )
}

export default TrafficLight;