import { FC } from 'react';
import styles from './FullPageLoader.module.scss';

interface FullPageLoaderProps {
  component: string;
}

const FullPageLoader: FC<FullPageLoaderProps> = ({component}) => (
  <div className={styles.FullPageLoader} data-testid="FullPageLoader">
    <h1>Loading...</h1>
    <p>{ component }</p>
  </div>
);

export default FullPageLoader;
