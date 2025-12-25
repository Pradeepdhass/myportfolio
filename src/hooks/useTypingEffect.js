import { useState, useEffect } from 'react';

const useTypingEffect = (texts, typeSpeed = 200, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentFullText = texts[textIndex];

    const handleTyping = () => {
      setDisplayText(currentFullText.slice(0, index + 1));
      setIndex((prev) => prev + 1);
    };

    if (index === currentFullText.length) {
      const timeout = setTimeout(() => {
        setIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
        setDisplayText('');
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [index, textIndex, texts, typeSpeed, pauseDuration]);

  return displayText;
};

export default useTypingEffect;
