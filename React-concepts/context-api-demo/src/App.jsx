import { useState } from "react";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import "./App.css"

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((state) => (state === themes.light ? themes.dark : themes.light));
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Navbar />
        <Button changeTheme={toggleTheme} />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
