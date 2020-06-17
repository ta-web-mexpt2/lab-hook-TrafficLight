import React, { useEffect, useState } from "react";
import Light from "../Light";
import "../TrafficLight/styles.css";

const TrafficLight = () => {

  const [seconds, setSeconds] = useState(0);
  const compareSeconds = (delay) => {
    return seconds % 8 === delay ? "true" : "false";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    console.log(interval)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light">
      <Light color="#f00" active={compareSeconds(0)} />
      <Light color="#ff0" active={compareSeconds(2)} />
      <Light color="#0c0" active={compareSeconds(4)} />
    </div>
  );
};

export default TrafficLight;
