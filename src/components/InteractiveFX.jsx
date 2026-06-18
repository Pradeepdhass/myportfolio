import React, { useEffect, useState, useRef } from 'react';

const InteractiveFX = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // Refs for smooth animation
  const outerCursorRef = useRef(null);
  const requestRef = useRef();
  const trailingPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  // Update the cursor position smoothly
  const animateCursor = () => {
    // Fast spring for 3D cursor to feel responsive but smooth
    trailingPos.current.x += (targetPos.current.x - trailingPos.current.x) * 0.4;
    trailingPos.current.y += (targetPos.current.y - trailingPos.current.y) * 0.4;

    if (outerCursorRef.current) {
      outerCursorRef.current.style.transform = `translate(${trailingPos.current.x}px, ${trailingPos.current.y}px)`;
    }

    requestRef.current = requestAnimationFrame(animateCursor);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .skill-tag, .project-card, .achievement-card, .social-link, .theme-switch');
      if (target) {
        if (!target.dataset.hovered) {
          target.dataset.hovered = 'true';
          setIsHovering(true);
          
          target.addEventListener('mouseleave', () => {
            target.dataset.hovered = '';
            setIsHovering(false);
          }, { once: true });
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={outerCursorRef}
      className={`custom-cursor-3d ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        zIndex: 999999,
        willChange: 'transform'
      }}
    >
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-svg-3d"
      >
        <path 
          d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.84c.45 0 .67-.54.35-.85L5.5 3.21z" 
          fill="white" 
          stroke="black" 
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default InteractiveFX;
