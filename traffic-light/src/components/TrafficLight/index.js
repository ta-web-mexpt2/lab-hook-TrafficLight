import React, { useEffect, useState } from 'react';
import './App.css';
import Light from "../Light";

const TrafficLight = () => {
  const [selectedLight, setLight]= useState([])
}

useEffect(() => {
 const selectedLight = 
  );
  setLight(selectedLight);
 };

  return (
    <section>
      <div className="traffic-light">>
        <div className="light1"></div>
        <div className="light2"></div>
        <div className="light3"></div>
      </div>
    </section>
  )
}

export default TrafficLight;