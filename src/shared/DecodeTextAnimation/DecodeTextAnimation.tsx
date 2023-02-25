import React, { FC, useEffect, useState } from 'react';

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const letterAnimation = (finalText: string, getter: string, setter: React.Dispatch<React.SetStateAction<string>>, intervalTimeout: number) => {
  let iterations = 0;

  const interval = setInterval(() => {
    const newText = getter.split('').map((letter: string, index: number) => {
      if (index < iterations) {
        return finalText[index];
      } 

      if (letter == ' ' || letter == '-') {
        return ' ';
      }

      return ALPHABET[Math.floor(Math.random() * 26)];
    })
    .join('');
    setter(newText);

    if (iterations >= finalText.length) clearInterval(interval);

    iterations += 1 / 3;

  }, intervalTimeout);
}

interface DecodeTextAnimationProps {
  decodedText: string;
}

const DecodeTextAnimation: FC<DecodeTextAnimationProps> = ({decodedText}) => {
  const [animatedText, setAnimatedText] = useState(decodedText);

  useEffect(() => {
    letterAnimation(decodedText, animatedText, setAnimatedText, 30);
  },[]);

  const clicked = () => {
    letterAnimation(decodedText, animatedText, setAnimatedText, 30);
  };

  return (
    <span style={{ cursor: "var(--emoji-detective)" }} onClick={clicked} data-testid="DecodeTextAnimation">
      {animatedText || decodedText}
    </span>
  );
};

export default DecodeTextAnimation;
