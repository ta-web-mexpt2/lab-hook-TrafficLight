import React, { useState, useEffect } from "react";
import Light from "../Light";

function TrafficLight() {
  const [seconds, setSeconds] = useState(0);
  const compareSeconds = (delay) => {
    return seconds % 8 === delay ? "true" : "false";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light">
      <Light color="red" active={compareSeconds(0)} />
      <Light color="yellow" active={compareSeconds(2)} />
      <Light color="green" active={compareSeconds(4)} />
    </div>
  );
}

export default TrafficLight;
