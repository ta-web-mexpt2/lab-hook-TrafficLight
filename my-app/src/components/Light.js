import React from 'react';

const Light = ( {bgColor, active} )=>(

// dos variables  color, active --> active afectara la opacidadx
    <div  className="light"
          style={{backgroundColor: bgColor,
                  opacity: active ? 1 : 0.3
            }}
/>


    
  );


export default Light;

