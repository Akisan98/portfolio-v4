import React, { FC } from 'react';
import styles from './GradientTextAnimation.module.scss';

interface GradientTextAnimationProps {
  text: string;
}

const GradientTextAnimation: FC<GradientTextAnimationProps> = ({ text }) => (
  <span className={styles.GradientTextAnimation} data-testid="GradientTextAnimation">
    { text }
  </span>
);

export default GradientTextAnimation;
