import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    console.log("App rendered");
  });

  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [message]);

  function addTodo() {
    if (!newTodo) return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
    setMessage("✅ Todo added!");
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
    setMessage("🗑️ Todo deleted!");
  }

  return (
    <div className="app">
      <h1>Todo App with useEffect</h1>
      {message && <p className="message">{message}</p>}
      <div className="input-section">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
