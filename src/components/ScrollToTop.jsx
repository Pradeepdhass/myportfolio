import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const THRESHOLD = 50;

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const scrollableHeight = documentHeight - windowHeight;
      const percent = scrollableHeight > 0 
        ? Math.round((scrollTop / scrollableHeight) * 100) 
        : 0;
      
      setScrollPercent(percent);

      if (scrollTop > THRESHOLD) {
        setVisible(true);
      } else {
        setVisible(true); 
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (window.scrollY > THRESHOLD) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
    }
  };

  const showPercent = scrollPercent > 0 && scrollPercent < 100 && !isHovered;
  
  // Circumference for r=22 is 138.23
  const strokeDasharray = 138.23;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * scrollPercent) / 100;

  return (
    <button
      id="scrollToggle"
      className={`scroll-toggle ${visible ? 'show' : ''}`}
      aria-label="Scroll Button"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: 'none',
        background: 'var(--bg-card)',
        boxShadow: isHovered 
          ? '0 12px 35px var(--shadow-color), 0 0 15px rgba(34, 211, 238, 0.25)' 
          : '0 10px 30px var(--shadow-color)',
        transition: 'opacity .28s ease, transform .28s ease, background-color 0.2s ease, box-shadow 0.2s ease',
        transform: isHovered ? 'scale(1.08) translateY(-2px)' : 'scale(1) translateY(0)',
        cursor: 'pointer',
        overflow: 'visible'
      }}
    >
      {/* Circular Progress SVG */}
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'rotate(-90deg)',
          pointerEvents: 'none',
          overflow: 'visible'
        }}
      >
        <defs>
          <linearGradient id="scrollProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-cyan)" />
            <stop offset="100%" stopColor="var(--color-pink)" />
          </linearGradient>
        </defs>
        {/* Track circle */}
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="transparent"
          stroke="var(--glass-border)"
          strokeWidth="3"
        />
        {/* Progress circle */}
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="transparent"
          stroke="url(#scrollProgressGrad)"
          strokeWidth="3"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.1s linear'
          }}
        />
      </svg>

      {/* Percentage Text */}
      <span 
        className="scroll-percent-text" 
        style={{
          position: 'absolute',
          opacity: showPercent ? 1 : 0,
          transform: showPercent ? 'scale(1)' : 'scale(0.7)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          fontSize: '0.8rem',
          fontWeight: '700',
          fontFamily: '"Fira Code", monospace',
          pointerEvents: 'none',
          color: 'var(--text-main)'
        }}
      >
        {scrollPercent}%
      </span>

      {/* Arrow Icon */}
      <i 
        className={scrollPercent > 5 ? "fas fa-arrow-up" : "fas fa-arrow-down"} 
        style={{
          opacity: showPercent ? 0 : 1,
          transform: showPercent ? 'scale(0.7)' : 'scale(1)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          pointerEvents: 'none',
          fontSize: '1.05rem',
          color: 'var(--text-main)'
        }}
      ></i>
    </button>
  );
};

export default ScrollToTop;
