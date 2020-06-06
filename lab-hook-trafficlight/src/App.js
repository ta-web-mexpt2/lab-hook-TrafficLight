import React from 'react';
import './App.css';
import TrafficLight from './component/TrafficLight';

function App() {
  return (
    <div className="App">
      <TrafficLight initialValue={0} />
    </div>
  );
}

export default App;
