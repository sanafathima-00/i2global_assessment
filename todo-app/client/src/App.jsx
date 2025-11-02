import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/NavBar";
import WorkToDo from "./pages/WorkToDo";

function App() {
  const [theme, setTheme] = useState("dark-mode");

  const toggleTheme = () => {
    setTheme(theme === "dark-mode" ? "light-mode" : "dark-mode");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <WorkToDo />
    </div>
  );
}

export default App;
