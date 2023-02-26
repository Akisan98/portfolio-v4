import { FC } from 'react';
import styles from './SvgIcon.module.scss';
import GitHub from '../../../assets/github.svg'
import LinkedIn from '../../../assets/linkedin.svg'
import GitLab from '../../../assets/gitlab.svg'
import GooglePlay from '../../../assets/googlePlay.svg'

export interface SvgIconProps {
  url: string;
  src: IconName;
}

export type IconName = 'Github' | 'LinkedIn' | 'GitLab' | 'Google Play';

const iconMap = new Map<IconName, any>([
  ["Github", [GitHub, "Github Icon"]],
  ["LinkedIn", [LinkedIn, "LinkedIn Icon"]],
  ["GitLab", [GitLab, "GitLab Icon"]],
  ['Google Play', [GooglePlay, "Google Play Icon"]]
]);

const SvgIcon: FC<SvgIconProps> = ({url, src}) => (
  <>
    <a className={styles.SvgIcon} href={url} target="_blank" data-testid="SvgIcon">
      <img src={iconMap.get(src)[0]} alt={iconMap.get(src)[1]} />
    </a>
  </>
);

export default SvgIcon;
