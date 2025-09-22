import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example API call to demonstrate Network panel
    fetch(import.meta.env.VITE_API_URL)
      .then(response => response.json())
      .then(result => {
        console.log("Fetched data:", result); // Console panel demo
        setData(result);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // Deliberate error for Sources panel debugging
  const handleClick = () => {
    const x = undefinedVariable; // This will throw ReferenceError
    console.log(x);
  };

  return (
    <div className="app">
      <h1>DevTools Debug Demo</h1>
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={handleClick}>Click to Debug Error</button>
    </div>
  );
}

export default App;
