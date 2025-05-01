import React, { useState, useEffect } from 'react';
import '../App.css';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../logo.png';


const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="toggle-wrapper" onClick={toggleTheme}>
        <div className={`toggle ${darkMode ? "dark" : "light"}`}>
          <span className="icon">{darkMode ? <FaMoon /> : <FaSun />}</span>
        </div>
    </div>
    </nav>
  );
};

export default Nav;
