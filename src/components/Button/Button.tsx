import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import { type ButtonProps } from './Button.props';
import { Elements } from '@/interfaces';

export const Button: React.FC<ButtonProps> = ({
  text = '',
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  isActive = false,
  isToggle = false,
  disabled = false,
  leftIcon,
  rightIcon,
  children,
  as = 'button',
  className,
  ...rest
}) => {
  const classes = clsx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    {
      [styles['button--loading']]: isLoading,
      [styles['button--disabled']]: disabled,
      [styles['button--active']]: isActive,
    },
    className,
  );

  const content = (
    <>
      {isLoading && <span className={styles.spinner} />}
      {!isLoading && leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.text}>{text || children}</span>
      {!isLoading && rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </>
  );

  const ButtonElement = as === Elements.link ? 'a' : 'button';

  return (
    <ButtonElement
      className={classes}
      disabled={disabled || isLoading}
      aria-pressed={isToggle ? isActive : undefined}
      type={as === Elements.button ? 'button' : undefined}
      {...(rest as any)}
    >
      {content}
    </ButtonElement>
  );
};
