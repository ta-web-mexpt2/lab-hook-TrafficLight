import React from "react";

const Light = (props) => {
    
    const offColor = props.color === "red" ? "coral": props.color === "yellow" ? "lemonchiffon" : "lightgreen";

    return (
        <div style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            margin: "10px",
            background: props.active ? props.color : offColor
        }}>
        </div>
    )
}

export default Light;