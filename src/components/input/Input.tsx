import React, { forwardRef, useState } from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";
import type { InputProps } from "./Input.props";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      variant = "default",
      size = "medium",
      errorText,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      props.onBlur?.(e);
    };

    const hasError = variant === "error" || !!errorText;
    const hasValue = !!props.value || !!props.defaultValue;

    return (
      <div
        className={clsx(
          styles["input-wrapper"],
          styles[`input-wrapper--${size}`],
          className
        )}
      >
        <div
          className={clsx(styles["input-field"], {
            [styles["input-field--focused"]]: isFocused && !hasError,
            [styles["input-field--error"]]: hasError,
            [styles["input-field--disabled"]]: disabled,
          })}
        >
          <input
            ref={ref}
            className={styles["input"]}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {label && (
            <label
              className={clsx(styles["input-label"], {
                [styles["input-label--floating"]]: isFocused || hasValue,
                [styles["input-label--error"]]: hasError,
                [styles["input-label--focused"]]: isFocused && !hasError,
              })}
            >
              {label}
            </label>
          )}
        </div>
        {hasError && errorText && (
          <p className={styles["input-error-text"]}>{errorText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
