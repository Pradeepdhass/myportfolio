import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [lines, setLines] = useState([""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);

  const textLines = [
    "Warming up creativity… ✨",
    "Designing UI elements… 🎨",
    "Linking frontend scripts… 💻",
    "Final touches… 🚀"
  ];

  useEffect(() => {
    let charIndex = 0;
    let currentLineIndex = 0;
    let timeoutId;

    const typeChar = () => {
      const currentText = textLines[currentLineIndex];
      if (!currentText) return;

      if (charIndex <= currentText.length) {
        setLines(prev => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentText.slice(0, charIndex);
          return newLines;
        });
        charIndex++;
        const delay = 18 + Math.random() * 30;
        timeoutId = setTimeout(typeChar, delay);
      } else {
        currentLineIndex++;
        charIndex = 0;
        if (currentLineIndex < textLines.length) {
          setLines(prev => [...prev, ""]);
          setLineIndex(currentLineIndex);
          timeoutId = setTimeout(typeChar, 420 + Math.random() * 260);
        } else {
          timeoutId = setTimeout(finalize, 600);
        }
      }
    };

    const finalize = () => {
      setLines(prev => [...prev, "", "All systems ready."]);
      setReady(true);
      setTimeout(() => {
        document.body.classList.add('loaded');
        setTimeout(() => setVisible(false), 700);
      }, 600);
    };

    timeoutId = setTimeout(typeChar, 180);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!visible) return null;

  const pct = Math.round((lineIndex / textLines.length) * 100);

  return (
    <div id="preloader-term" aria-hidden="true" role="status">
      <div className="term-card" role="status" aria-live="polite">
        <div className="term-top">
          <span className="dot dot-r"></span>
          <span className="dot dot-y"></span>
          <span className="dot dot-g"></span>
          <div className="term-title">boot System • My-Portfolio</div>
        </div>
        <div className="term-body" aria-hidden="true">
          <pre className="term-output" aria-hidden="true">
            {lines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </pre>
          <div className="term-cursor" aria-hidden="true">
            █
          </div>
        </div>
        <div className="term-footer">
          {ready ? "Ready" : `Loading — ${pct}%`}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
