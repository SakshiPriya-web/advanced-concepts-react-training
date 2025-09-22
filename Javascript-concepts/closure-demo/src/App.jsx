import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [currentCount, setCurrentCount] = useState(0);

  const counterRef = useRef(
    (() => {
      let count = 0;
      return () => {
        count++;
        return count;
      };
    })()
  );

  const handleClick = () => {
    setCurrentCount(counterRef.current());
  };

  return (
    <div className="app">
      <h1>Closure Demo</h1>
      <p>Count: {currentCount}</p>
      <button onClick={handleClick}>Increment Counter</button>
    </div>
  );
}

export default App;
