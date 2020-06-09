import React, { useEffect, useState } from "react";
import Light from "../Light";

const TrafficLight = () => {
  const [active, setActive] = useState([]);

  // useEffect(, []);

  return (
    <div className="traffic-light">
      <Light color="" active="" />
      <Light color="" active="" />
      <Light color="" active="" />
    </div>
  );
};

export default TrafficLight;
