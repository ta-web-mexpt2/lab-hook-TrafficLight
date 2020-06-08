import React, {useState, useEffect} from 'react';
import Light from './Light';

const duration = [1000, 1000, 1000];

const TrafficLight = ({ value }) => {
  const [index, setIndex] = useState(value);

  useEffect(() => {
    const time = setTimeout(  () => {
      setIndex((index + 1) % 3)},  duration[index]);
    
      return () => {clearTimeout(time);};
  });

  return (
    <div className="traffic-light">
      <Light bgColor="#f00"  active={index === 0} />
      <Light bgColor="#ff0" active={index === 2} />
      <Light bgColor="#0c0" active={index === 1} />
    </div>
  );
};

export default TrafficLight