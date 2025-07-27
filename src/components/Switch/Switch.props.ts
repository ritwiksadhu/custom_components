import type { Size } from '@/interfaces';

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onIcon?: React.ReactNode;
  offIcon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  size?: Size;
}
