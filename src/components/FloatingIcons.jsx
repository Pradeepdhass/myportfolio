import React, { useEffect, useRef } from 'react';

const FloatingIcons = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const icons = Array.from(containerRef.current.querySelectorAll('.ficon'));
    if (!icons.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Initial Positioning
    icons.forEach(el => {
      const dx = Number(el.dataset.x) || 0;
      const dy = Number(el.dataset.y) || 0;
      el.style.left = `calc(50% + ${dx}vw)`;
      el.style.top  = `calc(50% + ${dy}vh)`;
    });

    if (reduced) return;

    const global = {
      baseAmplitude: 40,
      baseSpeed: 0.0022,
      parallaxStrength: 0.04,
    };

    const items = icons.map((el, i) => {
      const speedAttr = Number(el.dataset.speed) || (10 + (i % 6));
      const amp = (global.baseAmplitude * (0.6 + Math.random() * 1.4)) * (1 + (i%3)*0.12);
      const omega = global.baseSpeed * (12 / (speedAttr || 10));
      const phase = Math.random() * Math.PI * 2;
      const dir = (Math.random() > 0.5) ? 1 : -1;
      const ax = amp * (0.6 + Math.random() * 0.9);
      const ay = amp * (0.4 + Math.random() * 0.9);

      return { el, omega, phase, ax, ay, dir };
    });

    let frameId;
    let time = 0;

    const animate = () => {
      time += 1;
      items.forEach(item => {
        const { el, omega, phase, ax, ay, dir } = item;
        const t = time * omega;
        const offX = Math.sin(t + phase) * ax * dir;
        const offY = Math.cos(t + phase * 0.8) * ay * dir;
        el.style.transform = `translate(${offX.toFixed(2)}px, ${offY.toFixed(2)}px)`;
      });
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="floating-icons-bg" aria-hidden="true" ref={containerRef}>
      <div className="ficon" data-x="-10" data-y="-15" data-speed="12" data-rot="6" title="Figma">
        <i className="fab fa-figma"></i>
      </div>
      <div className="ficon" data-x="20" data-y="-25" data-speed="9" data-rot="-8" title="HTML5">
        <i className="fab fa-html5"></i>
      </div>
      <div className="ficon" data-x="-25" data-y="10" data-speed="14" data-rot="10" title="CSS3">
        <i className="fab fa-css3-alt"></i>
      </div>
      <div className="ficon" data-x="30" data-y="20" data-speed="10" data-rot="-6" title="Bootstrap">
        <i className="fab fa-bootstrap"></i>
      </div>
      <div className="ficon" data-x="-40" data-y="-5" data-speed="18" data-rot="12" title="JavaScript">
        <i className="fab fa-js"></i>
      </div>
      <div className="ficon" data-x="0" data-y="35" data-speed="11" data-rot="-10" title="React">
        <i className="fab fa-react"></i>
      </div>
      <div className="ficon" data-x="45" data-y="-10" data-speed="13" data-rot="8" title="GitHub">
        <i className="fab fa-github"></i>
      </div>
      <div className="ficon" data-x="-5" data-y="-40" data-speed="16" data-rot="-12" title="Firebase">
        <i className="fas fa-fire"></i>
      </div>
      <div className="ficon" data-x="-50" data-y="20" data-speed="15" data-rot="14" title="VS Code">
        <i className="fas fa-code"></i>
      </div>
      <div className="ficon" data-x="52" data-y="18" data-speed="14" data-rot="-9" title="Tailwind CSS">
        <i className="fas fa-wind"></i>
      </div>
      <div className="ficon" data-x="-30" data-y="45" data-speed="19" data-rot="11" title="Node.js">
        <i className="fab fa-node-js"></i>
      </div>
      <div className="ficon" data-x="10" data-y="48" data-speed="17" data-rot="13" title="Express">
        <i className="fas fa-server"></i>
      </div>
      <div className="ficon" data-x="-60" data-y="-20" data-speed="20" data-rot="-14" title="MongoDB">
        <i className="fas fa-leaf"></i>
      </div>
      <div className="ficon" data-x="60" data-y="-30" data-speed="12" data-rot="9" title="MySQL">
        <i className="fas fa-database"></i>
      </div>
      <div className="ficon" data-x="-45" data-y="5" data-speed="13" data-rot="12" title="Git">
        <i className="fab fa-git-alt"></i>
      </div>
      <div className="ficon" data-x="-15" data-y="55" data-speed="15" data-rot="-11" title="Flutter">
        <i className="fas fa-mobile-alt"></i>
      </div>
      <div className="ficon" data-x="40" data-y="48" data-speed="16" data-rot="8" title="Dart">
        <i className="fas fa-circle-notch"></i>
      </div>
      <div className="ficon" data-x="-42" data-y="32" data-speed="12" data-rot="10" title="Python">
        <i className="fab fa-python"></i>
      </div>
      <div className="ficon" data-x="55" data-y="-5" data-speed="22" data-rot="-9" title="Linux">
        <i className="fab fa-linux"></i>
      </div>
      <div className="ficon" data-x="0" data-y="-55" data-speed="18" data-rot="14" title="TypeScript">
        <i className="fab fa-js-square"></i>
      </div>
      <div className="ficon" data-x="25" data-y="-50" data-speed="11" data-rot="7" title="Next.js">
        <i className="fas fa-arrow-circle-right"></i>
      </div>
      <div className="ficon" data-x="-55" data-y="55" data-speed="16" data-rot="8" title="Adobe XD">
        <i className="fas fa-pen-nib"></i>
      </div>
      <div className="ficon" data-x="33" data-y="58" data-speed="17" data-rot="12" title="Photoshop">
        <i className="fas fa-magic"></i>
      </div>
      <div className="ficon" data-x="-25" data-y="-60" data-speed="19" data-rot="-13" title="Illustrator">
        <i className="fas fa-pencil-ruler"></i>
      </div>
      <div className="ficon" data-x="20" data-y="-65" data-speed="14" data-rot="9" title="Canva">
        <i className="fas fa-brush"></i>
      </div>
    </div>
  );
};

export default FloatingIcons;
