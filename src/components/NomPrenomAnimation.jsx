// NomPrenomAnimation.js
import React, { useEffect, useState } from 'react';

const NomPrenomAnimation = ({ firstName, speed, delay, style }) => {
  const [animatedFirstName, setAnimatedFirstName] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      animateText(firstName, setAnimatedFirstName, speed);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [firstName, speed, delay]);

  function animateText(text, setText, speed) {
    let index = 0;

    function addNextLetter() {
      if (index < text.length) {
        const currentLetter = text[index];
        const animatedText = currentLetter === ' ' ? ' ' : currentLetter;
        setText(prevText => prevText + animatedText);
        index++;
        setTimeout(addNextLetter, speed);
      }
    }

    addNextLetter();
  }

  return (
    <div style={style}>
      {animatedFirstName}
    </div>
  );
};

export default NomPrenomAnimation;
