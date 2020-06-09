import React from "react";

const Light = ({ color, active }) => {
  return (
    <div
      className={
        `light ${color} ` + (active === "true" ? "active" : "inactive")
      }
    ></div>
  );
};

export default Light;
