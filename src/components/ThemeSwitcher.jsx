import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { toggleTheme, changeAccent } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const paletteRef = useRef(null);
  const btnRef = useRef(null);

  const handleThemeChange = (accent) => {
    if (accent === 'light' || accent === 'dark') {
      toggleTheme(accent);
      // If switching base theme, maybe keep accent? 
      // The original script logic: 
      // if light/dark -> applyThemeBase, then re-apply saved accent.
      // My ThemeContext handles this automatically.
    } else {
      toggleTheme('dark'); // Default to dark if picking a color?
      // Original script: applyThemeBase('dark'); setAccent(accent);
      changeAccent(accent);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        paletteRef.current && 
        !paletteRef.current.contains(event.target) && 
        !btnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={btnRef}
        className="theme-switch shadow-lg"
        id="themeToggle"
        title="Switch Theme"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-palette" aria-hidden="true"></i>
      </button>

      <div
        ref={paletteRef}
        id="themePalette"
        className={`theme-palette ${isOpen ? 'open' : ''}`}
        role="menu"
        aria-label="Choose theme color"
        tabIndex={-1}
        aria-hidden="true"
      >
        <button className="palette-swatch" data-accent="light" onClick={() => handleThemeChange('light')}>
          <span className="swatch-inner" style={{background: '#f0f2f5'}}></span>
        </button>
        <button className="palette-swatch" data-accent="pink" onClick={() => handleThemeChange('pink')}>
          <span className="swatch-inner" style={{background: '#ff4db0'}}></span>
        </button>
        <button className="palette-swatch" data-accent="red" onClick={() => handleThemeChange('red')}>
          <span className="swatch-inner" style={{background: '#ff6b6b'}}></span>
        </button>
        <button className="palette-swatch" data-accent="green" onClick={() => handleThemeChange('green')}>
          <span className="swatch-inner" style={{background: '#10b981'}}></span>
        </button>
        <button className="palette-swatch" data-accent="cyan" onClick={() => handleThemeChange('cyan')}>
          <span className="swatch-inner" style={{background: '#06b6d4'}}></span>
        </button>
        <button className="palette-swatch" data-accent="purple" onClick={() => handleThemeChange('purple')}>
          <span className="swatch-inner" style={{background: '#8b5cf6'}}></span>
        </button>
      </div>
    </>
  );
};

export default ThemeSwitcher;
