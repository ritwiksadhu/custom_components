import type { InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  variant?: 'default' | 'error' | 'success';
  size?: 'small' | 'medium' | 'large';
  errorText?: string;
  successText?: string;
  disabled?: boolean;
  className?: string;
  onFocusChange?: (isFocused: boolean) => void;
}
