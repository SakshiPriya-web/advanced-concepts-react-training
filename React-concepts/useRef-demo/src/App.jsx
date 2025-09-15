import React, { useState, useRef, useEffect } from "react";
import "./App.css";

export default function App() {
  const inputRef = useRef(null);

  const clickCountRef = useRef(0);

  const [count, setCount] = useState(0);
  const prevCountRef = useRef(count);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  function handleClick() {
    clickCountRef.current += 1;
    alert(`Button clicked ${clickCountRef.current} times (stored in ref)`);
  }

  return (
    <div className="container">
      <h2>useRef Demo (React Docs)</h2>

      <div className="section">
        <h3>1. Access DOM element</h3>
        <input ref={inputRef} placeholder="Auto-focused on mount" />
      </div>

      <div className="section">
        <h3>2. Store value without re-render</h3>
        <button onClick={handleClick}>Click Me</button>
        <p>Check the alert (value stored in ref, not state)</p>
      </div>

      <div className="section">
        <h3>3. Persist value between renders</h3>
        <p>Current count: {count}</p>
        <p>Previous count (stored in ref): {prevCountRef.current}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}
