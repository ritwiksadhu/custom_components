import React from 'react';
import clsx from 'clsx';
import styles from './Switch.module.scss';
import type { SwitchProps } from './Switch.props';
import { Size } from '@/interfaces';

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  onIcon,
  offIcon,
  disabled = false,
  size = Size.medium,
  className,
}) => {
  const handleToggle = () => {
    if (disabled) return;
    onChange(!checked);
  };

  return (
    <div
      className={clsx(
        styles.switch,
        styles[`switch--${size}`],
        { [styles['switch--checked']]: checked, [styles['switch--disabled']]: disabled },
        className,
      )}
      onClick={handleToggle}
    >
      {onIcon && <span className={clsx(styles.icon, styles['icon--on'])}>{onIcon}</span>}
      {offIcon && <span className={clsx(styles.icon, styles['icon--off'])}>{offIcon}</span>}
      <div className={styles.thumb} />
    </div>
  );
};
