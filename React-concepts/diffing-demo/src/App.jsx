import { useState } from "react";
import "./App.css";

export default function App() {
  const [toggleRoot, setToggleRoot] = useState(true);
  const [color, setColor] = useState("red");
  const [counterProp, setCounterProp] = useState(0);

  return (
    <div className="container">
      <h1>Diffing Demo</h1>

      <section>
        <h2>1. Root Elements of Different Type</h2>
        <button onClick={() => setToggleRoot(!toggleRoot)}>
          Toggle Root Element
        </button>
        {toggleRoot ? (
          <div className="box">
            <Counter />
          </div>
        ) : (
          <span className="box">
            <Counter />
          </span>
        )}
        <p className="note">
          Switching div ↔ span resets the Counter (state lost).
        </p>
      </section>

      <section>
        <h2>2. Same DOM Element with Updated Props</h2>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
          Change Color
        </button>
        <div className={`color-box ${color}`}>I only change color</div>
        <p className="note">
          Same div is reused, only class/style changes.
        </p>
      </section>

      <section>
        <h2>3. Component Element of Same Type</h2>
        <button onClick={() => setCounterProp(counterProp + 1)}>
          Update Counter Prop
        </button>
        <CounterWithProp value={counterProp} />
        <p className="note">
          Internal state is preserved, only prop updates.
        </p>
      </section>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function CounterWithProp({ value }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-prop">
      <p>Prop value: {value}</p>
      <p>Internal count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Internal Count
      </button>
    </div>
  );
}
