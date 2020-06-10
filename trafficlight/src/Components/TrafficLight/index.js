import React, { useEffect, useState } from "react";
import Light from "../Light";
import "../TrafficLight/styles.css"

const TrafficLight = () => {
  const [active, setActive] = useState([]);

  // useEffect();

  return (
    <div className="traffic-light">
      <Light color="#f00" active="50%" />
      <Light color="#ff0" active="" />
      <Light color="#0c0" active="" />
    </div>
  );
};

export default TrafficLight;
