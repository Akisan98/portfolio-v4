import { FC } from 'react';
import Hero from '../components/Hero/Hero';
import styles from './homePage.module.scss';

const HomePage: FC = () => (
  <div className={styles.HomePage} data-testid="HomePage">
    <Hero />
    HomePage Component
  </div>
);

export default HomePage;
