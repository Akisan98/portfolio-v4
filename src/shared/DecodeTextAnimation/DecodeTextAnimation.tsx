import React, { FC, useEffect, useState } from 'react';
import styles from "./DecodeTextAnimation.module.scss";

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
    letterAnimation(decodedText, animatedText, setAnimatedText, 10);
  },[]);

  const clicked = () => {
    letterAnimation(decodedText, animatedText, setAnimatedText, 10);
  };

  return (
    <span className={styles.DecodeTextAnimation} onClick={clicked} data-testid="DecodeTextAnimation">
      {animatedText || decodedText}
    </span>
  );
};

export default DecodeTextAnimation;
