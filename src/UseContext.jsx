import React, { createContext, useContext, useState } from 'react';

// Membuat konteks untuk tema
const ThemeContext = createContext();

// Komponen induk yang menyediakan tema
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Komponen anak yang menggunakan tema
const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
        color: theme === 'light' ? '#000000' : '#ffffff',
      }}
    >
      Toggle Theme
    </button>
  );
};

// Komponen induk
const UseContext = () => {
  return (
    <ThemeProvider>
      <div>
        <h4>Contoh Penggunaan useContext</h4>
        <ThemedButton />
      </div>
    </ThemeProvider>
  );
};

export default UseContext;
