import React from "react";
import useDeviceDetection from "./hooks/useDeviceDetection";
import "./App.css";

const App = () => {
  const device = useDeviceDetection();

  return (
    <div className="app">
      <h1>Device Detection Demo</h1>
      <h2>Your Device: {device}</h2>

      {device === "Mobile" && <p className="mobile">📱 This is a mobile layout!</p>}
      {device === "Tablet" && <p className="tablet">📟 This is a tablet layout!</p>}
      {device === "Desktop" && <p className="desktop">🖥 This is a desktop layout!</p>}
    </div>
  );
};

export default App;
