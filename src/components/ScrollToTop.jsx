import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [iconClass, setIconClass] = useState("fas fa-arrow-down");
  const THRESHOLD = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > THRESHOLD) {
        setVisible(true);
        setIconClass("fas fa-arrow-up");
      } else {
        setVisible(true); 
        setIconClass("fas fa-arrow-down");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (window.scrollY > THRESHOLD) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
    }
  };

  return (
    <button
      id="scrollToggle"
      className={`scroll-toggle ${visible ? 'show' : ''}`}
      aria-label="Scroll Button"
      onClick={handleClick}
    >
      <i className={iconClass}></i>
    </button>
  );
};

export default ScrollToTop;
