import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';
import type { InputProps } from './Input.props';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      variant = 'default',
      size = 'medium',
      errorText,
      successText,
      disabled = false,
      className,
      onFocusChange,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
      onFocusChange?.(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onFocusChange?.(false);
      props.onBlur?.(e);
    };

    const hasError = variant === 'error' || !!errorText;
    const hasSuccess = variant === 'success' || !!successText;
    const hasValue = !!props.value || !!props.defaultValue;

    return (
      <div className={clsx(styles.inputWrapper, styles[`inputWrapper--${size}`], className)}>
        <div
          className={clsx(styles.inputField, {
            [styles['inputField--focused']]: isFocused && !hasError && !hasSuccess,
            [styles['inputField--error']]: hasError,
            [styles['inputField--success']]: hasSuccess,
            [styles['inputField--disabled']]: disabled,
          })}
        >
          <input
            ref={ref}
            className={clsx(styles.input, styles[`input--${size}`])}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {label && (
            <label
              className={clsx(styles.inputLabel, {
                [styles['inputLabel--floating']]: isFocused || hasValue,
                [styles['inputLabel--focused']]: isFocused && !hasError && !hasSuccess,
                [styles['inputLabel--error']]: hasError,
              })}
            >
              {label}
            </label>
          )}
        </div>
        {hasError && errorText && (
          <p className={clsx(styles.inputFeedback, styles['inputFeedback--error'])}>{errorText}</p>
        )}
        {hasSuccess && successText && (
          <p className={clsx(styles.inputFeedback, styles['inputFeedback--success'])}>
            {successText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
