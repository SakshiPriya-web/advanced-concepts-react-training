import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Batch Updates Demo</h2>
      <p>Current Count: {count}</p>

      <div className="button-group">
        <button
          onClick={() => {
            setCount(count + 1);
            setCount(count + 1);
            setCount(count + 1);
          }}
        >
          Increment +3 (wrong way)
        </button>

        <button
          onClick={() => {
            setCount(prev => prev + 1);
            setCount(prev => prev + 1);
            setCount(prev => prev + 1);
          }}
        >
          Increment +3 (using updater functions)
        </button>

        <button
          onClick={() => {
            setCount(count + 5);
            setCount(prev => prev + 1);
          }}
        >
          Increment 5 then +1
        </button>

        <button
          onClick={() => {
            setCount(count + 5);
            setCount(prev => prev + 1);
            setCount(42);
          }}
        >
          Set 42 after updates
        </button>
      </div>
    </div>
  );
}
