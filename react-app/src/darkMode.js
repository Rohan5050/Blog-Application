import React, { useEffect, useState } from 'react';

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

export default DarkMode;