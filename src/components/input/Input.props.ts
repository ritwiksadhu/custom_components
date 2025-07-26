import type { InputHTMLAttributes } from 'react';
import type { OverrideProps, Size, Variant } from '@/interfaces';

interface CustomProps {
  label?: string;
  variant?: Variant;
  size?: Size;
  errorText?: string;
  focusCallback?: () => void;
}

export type InputProps = OverrideProps<InputHTMLAttributes<HTMLInputElement>, CustomProps>;
