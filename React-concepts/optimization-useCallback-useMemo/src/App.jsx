import React, { useState, useCallback, useMemo } from "react";
import "./App.css";

const TodoList = React.memo(function TodoList({ todos, addTodo }) {
  console.log("TodoList rendered");
  return (
    <div className="todo-section">
      <h3>Todos</h3>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
});

function slowSquare(n) {
  console.log("Calculating slow square...");
  for (let i = 0; i < 1000000000; i++) {}
  return n * n;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Learn React"]);

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New Todo " + (prev.length + 1)]);
  }, []);

  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  const squared = useMemo(() => slowSquare(number), [number]);

  const themeStyle = {
    backgroundColor: theme ? "#333" : "#fff",
    color: theme ? "#fff" : "#000",
    padding: "15px",
    borderRadius: "8px",
    marginTop: "10px",
  };

  return (
    <div className="container">
      <h2>React Performance Optimization</h2>

      <div className="section">
        <h3>🔹 useCallback Example</h3>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
        <TodoList todos={todos} addTodo={addTodo} />
      </div>

      <div className="section">
        <h3>🔹 useMemo Example</h3>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button onClick={() => setTheme((prev) => !prev)}>Toggle Theme</button>

        <div style={themeStyle}>
          <p>Squared Value: {squared}</p>
        </div>
      </div>
    </div>
  );
}
