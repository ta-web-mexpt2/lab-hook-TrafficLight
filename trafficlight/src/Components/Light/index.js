import React from "react";
import "../Light/styles.css";

const Light = ({ color, active }) => {
  return (
    <div
      style={{ "backgroundColor": color, opacity: active }}
      className="light"
    ></div>
  );
};

export default Light;
