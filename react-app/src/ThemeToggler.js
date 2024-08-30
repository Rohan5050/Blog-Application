/*import React, { useEffect, useState } from 'react';

const DarkMode = () => {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark-theme' ? 'light-theme' : 'dark-theme'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light-theme' ? 'dark' : 'light'} theme
    </button>
  );
};

export default DarkMode;*/

import React, { useState } from "react";

function ThemeToggler() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <div>
      <header>
        <h1>Theme Changer</h1>
        <div className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            id="theme-switch"
            onChange={toggleTheme}
            checked={theme === "dark-theme"}
          />
          <label className="toggle-switch-label" htmlFor="theme-switch">
            <span className="toggle-switch-inner"></span>
            <span className="toggle-switch-switch"></span>
          </label>
        </div>
      </header>

      <div id="content">
        <h2>Main Grid Section</h2>
        {/* Your grid components go here */}
      </div>

      <div className="section-under-grid">
        <h2>Section Under Grid</h2>
        <p>This section changes its theme too.</p>
      </div>
    </div>
  );
}

export default ThemeToggler;
