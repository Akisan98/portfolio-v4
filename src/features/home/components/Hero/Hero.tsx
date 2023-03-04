import { FC, useEffect, useRef, useState } from 'react';
import SvgIcon from '../../../../shared/components/SvgIcon/SvgIcon';
import styles from './Hero.module.scss';

import strings from '../../../../assets/strings.json'
import DecodeTextAnimation from '../../../../shared/components/DecodeTextAnimation/DecodeTextAnimation';
import techie from '../../../../assets/teams_techie.png'

const Hero: FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Handle CSS Animations being reset when PC MediaQuery takes over.
  useEffect(() => {
    const handleResize = () => {
      const prevWidth = windowWidth;

      if (prevWidth < 1200 && window.innerWidth > 1200) {
        document.documentElement.style.setProperty('--animation-delay', "0ms");
        document.documentElement.style.setProperty('--animation-part-1-duration', "0ms");
      }

      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return (
    <div className={styles.Hero} data-testid="Hero">
      <div className={styles.left}>
        <h1><DecodeTextAnimation decodedText={ strings.homePage.title } /></h1>
        <h2>{strings.homePage.subtitle}</h2>
        <button onClick={() => alert('Heyooo')}>{strings.homePage.ctaButton}</button>
  
        <div className={styles.icons}>
          <SvgIcon url={'https://github.com/Akisan98'} src={'Github'} />
          <SvgIcon url={'https://gitlab.com/Akisan98'} src={'GitLab'} />
          <SvgIcon url={'https://play.google.com/store/apps/developer?id=Akisan'} src={'Google Play'} />
          <SvgIcon url={'https://linkedin.com'} src={'LinkedIn'} />
        </div>
      </div>
  
      <div className={styles.right}>
        <img className={styles.hand} src={techie} alt={'Microsoft Teams - Techie Guy'} />
      </div>
    </div>
  );
}

export default Hero;
