import React from 'react';
import './App.css';

function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const appName = import.meta.env.VITE_APP_NAME;

  return (
    <div className="app">
      <h1>{appName}</h1>
      <p>API URL: {apiUrl}</p>
    </div>
  );
}

export default App;
