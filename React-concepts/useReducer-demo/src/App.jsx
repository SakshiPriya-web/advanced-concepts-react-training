import React, { useReducer } from "react";
import "./App.css";

// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "add":
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="container">
      <h2>Counter App with useReducer</h2>

      <h1>{state.count}</h1>

      <div className="buttons">
        <button onClick={() => dispatch({ type: "increment" })}>+1</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>

      <div className="buttons">
        <button onClick={() => dispatch({ type: "add", payload: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: "add", payload: -5 })}>
          -5
        </button>
      </div>

      <div className="section">
        <h3>Why useReducer here?</h3>
        <ul>
          <li>Complex state logic handled in one reducer function</li>
          <li>Next state depends on previous state (e.g., increment/decrement)</li>
          <li>Clear mapping of actions → state updates</li>
          <li>Can pass <code>dispatch</code> instead of multiple setters (avoids prop drilling)</li>
        </ul>
      </div>
    </div>
  );
}
