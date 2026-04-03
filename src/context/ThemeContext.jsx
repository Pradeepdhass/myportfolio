import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const BASES = {
  dark: {
    '--bg-body': '#071017',
    '--bg-card': 'rgba(18,22,30,0.6)',
    '--text-main': '#e9f9ff',
    '--text-muted': 'rgba(255,255,255,0.68)',
    '--glass-border': 'rgba(255,255,255,0.06)',
    '--shadow-color': 'rgba(2,6,12,0.6)'
  },
  light: {
    '--bg-body': '#f0f2f5',
    '--bg-card': 'rgba(255,255,255,0.92)',
    '--text-main': '#0b1220',
    '--text-muted': '#64748b',
    '--glass-border': 'rgba(0,0,0,0.06)',
    '--shadow-color': 'rgba(0,0,0,0.08)'
  }
};

const ACCENTS = {
  pink: {
    '--color-pink': '#ff4db0',
    '--color-cyan': '#22d3ee',
    '--color-orange': '#fb923c',
    '--color-green': '#34d399',
    '--color-purple': '#a78bfa',
    '--gradient-primary': 'linear-gradient(135deg,#ff4db0 0%, #a78bfa 100%)',
    '--gradient-warm': 'linear-gradient(135deg,#ff7ab6 0%, #ff3b88 100%)'
  },
  red: {
    '--color-pink': '#ff6b6b',
    '--color-cyan': '#22d3ee',
    '--color-orange': '#ff4d4d',
    '--color-green': '#34d399',
    '--color-purple': '#ef4444',
    '--gradient-primary': 'linear-gradient(135deg,#ff6b6b 0%, #ef4444 100%)',
    '--gradient-warm': 'linear-gradient(135deg,#ff7b6b 0%, #ff3b3b 100%)'
  },
  green: {
    '--color-pink': '#fb7185',
    '--color-cyan': '#06b6d4',
    '--color-orange': '#f97316',
    '--color-green': '#10b981',
    '--color-purple': '#7c3aed',
    '--gradient-primary': 'linear-gradient(135deg,#34d399 0%, #059669 100%)',
    '--gradient-warm': 'linear-gradient(135deg,#34d399 0%, #10b981 100%)'
  },
  cyan: {
    '--color-pink': '#ff77d2',
    '--color-cyan': '#06b6d4',
    '--color-orange': '#fb923c',
    '--color-green': '#34d399',
    '--color-purple': '#60a5fa',
    '--gradient-primary': 'linear-gradient(135deg,#22d3ee 0%, #06b6d4 100%)',
    '--gradient-warm': 'linear-gradient(135deg,#22d3ee 0%, #60a5fa 100%)'
  },
  purple: {
    '--color-pink': '#f472b6',
    '--color-cyan': '#22d3ee',
    '--color-orange': '#fb923c',
    '--color-green': '#34d399',
    '--color-purple': '#8b5cf6',
    '--gradient-primary': 'linear-gradient(135deg,#a78bfa 0%, #7c3aed 100%)',
    '--gradient-warm': 'linear-gradient(135deg,#a78bfa 0%, #ff7ab6 100%)'
  },
  orange: {
    '--color-pink': '#ff7ab6',
    '--color-cyan': '#22d3ee',
    '--color-orange': '#fb923c',
    '--color-green': '#34d399',
    '--color-purple': '#f97316',
    '--gradient-primary': 'linear-gradient(135deg,#fb923c 0%, #f97316 100%)',
    '--gradient-warm': 'linear-gradient(135deg,#fb923c 0%, #ff7ab6 100%)'
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const [accent, setAccent] = useState('pink');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'dark';
    const storedAccent = localStorage.getItem('accent') || 'pink';
    setTheme(storedTheme);
    setAccent(storedAccent);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Apply Base
    const baseVars = BASES[theme] || BASES.dark;
    Object.keys(baseVars).forEach(k => root.style.setProperty(k, baseVars[k]));

    if (theme === 'light') {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    }
    localStorage.setItem('theme', theme);

    // Apply Accent
    const accentVars = ACCENTS[accent] || ACCENTS.pink;
    Object.keys(accentVars).forEach(k => root.style.setProperty(k, accentVars[k]));
    localStorage.setItem('accent', accent);

  }, [theme, accent]);

  const toggleTheme = (newTheme) => {
      setTheme(newTheme);
  };

  const changeAccent = (newAccent) => {
      if (ACCENTS[newAccent]) {
          setAccent(newAccent);
      }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accent, changeAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
