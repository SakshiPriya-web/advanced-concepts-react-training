import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Listing = lazy(() => import("./pages/Listing"));

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/listing">Listing</Link>
        </nav>

        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/listing" element={<Listing />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
