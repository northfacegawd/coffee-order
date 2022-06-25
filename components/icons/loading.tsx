import React from 'react';

import styles from './loading.module.scss';

interface LoadingProps {
  size: number;
  speed?: `${number}s` | `${number}ms`;
}
const Loading: React.FC<LoadingProps> = function Loading({
  size,
  speed,
}: LoadingProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="150px"
      height="150px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${speed}`,
      }}
      className={styles.wrapper}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#fb923c"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="matrix(1,0,0,1,0,0)"
        className={styles.circle}
      />
    </svg>
  );
};

Loading.defaultProps = {
  speed: '150ms',
};

export default Loading;
