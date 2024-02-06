// NomPrenomAnimation.js
import React, { useEffect, useState } from "react";

const NomPrenomAnimation = ({ string, speed, delay, style }) => {
  const [animatedstring, setAnimatedstring] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      animateText(string, setAnimatedstring, speed);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [string, speed, delay]);

  function animateText(text, setText, speed) {
    let index = 0;

    function addNextLetter() {
      if (index < text.length) {
        const currentLetter = text[index];
        const animatedText = currentLetter === " " ? " " : currentLetter;
        setText((prevText) => prevText + animatedText);
        index++;
        setTimeout(addNextLetter, speed);
      }
    }

    addNextLetter();
  }

  return <div style={style}>{animatedstring}</div>;
};

export default NomPrenomAnimation;
