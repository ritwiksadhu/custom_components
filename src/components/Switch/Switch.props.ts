import type { ReactNode } from 'react';
import type { Size, Variant } from '@/interfaces';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onIcon?: ReactNode;
  offIcon?: ReactNode;
  disabled?: boolean;
  size?: Size;
  variant?: Variant; // Add more variants as needed
  className?: string;
}
