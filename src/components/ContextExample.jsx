import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, toggleTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    marginTop: '0.5rem',
    background: theme === 'light' ? '#f9fafb' : '#020617',
    color: theme === 'light' ? '#020617' : '#f9fafb',
  };

  return (
    <div style={styles}>
      <p>Current theme from context: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default function ContextExample() {
  return (
    <section>
      <h2>Context and useContext</h2>
      <p>Context lets you share values without prop drilling.</p>
      <ThemeSwitcher />
    </section>
  );
}