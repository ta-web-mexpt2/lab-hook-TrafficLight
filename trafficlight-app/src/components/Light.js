import React from "react";

const Light = ({ color, active }) => {
    return (
        <div>
            <div className={`light ${color} ${active}`}></div>
        </div>
    )
}

export default Light;