import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { type ButtonProps } from './Button.props';
import { Elements } from '@/interfaces';

export const Button: React.FC<ButtonProps> = ({
  text = '',
  variant = 'primary',
  size = 'medium',
  isLoading = false,
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

  if (as === Elements.link) {
    return (
      <a className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || isLoading} {...rest}>
      {content}
    </button>
  );
};
