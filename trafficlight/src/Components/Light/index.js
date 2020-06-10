import React from "react";
import "../Light/styles.css"



const Light = ({ color, active }) => {
  return (
        <div style={{"background-color": color, "opacity": active, }}  className="light">
        </div>
  );
};

export default Light;
