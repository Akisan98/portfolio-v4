import React, { FC } from 'react';
import styles from './Footer.module.scss';
import packageJson from '../../../../package.json';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className={styles.Footer} data-testid="Footer">
   <p>Version: { packageJson.version }</p>
  </footer>
);

export default Footer;
