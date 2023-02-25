import { FC } from 'react';
import styles from './SvgIcon.module.scss';
import GitHub from '../../../assets/github.svg'
import LinkedIn from '../../../assets/linkedin.svg'
import GitLab from '../../../assets/gitlab.svg'
import GooglePlay from '../../../assets/googlePlay.svg'

export interface SvgIconProps {
  url: string;
  src: IconName;
  alt: string;
}

export type IconName = 'Github' | 'LinkedIn' | 'GitLab' | 'Google Play';

const iconMap = new Map<IconName, any>([
  ["Github", GitHub],
  ["LinkedIn", LinkedIn],
  ["GitLab", GitLab],
  ['Google Play', GooglePlay]
]);

const SvgIcon: FC<SvgIconProps> = ({url, src, alt}) => (
  <>
    <a className={styles.SvgIcon} href={url} target="_blank" data-testid="SvgIcon">
      <img src={iconMap.get(src)} alt={alt} />
    </a>
  </>
);

export default SvgIcon;
