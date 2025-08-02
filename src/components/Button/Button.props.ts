import type { Elements, Size, Variant } from '../../interfaces';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  isActive?: boolean; // <-- New for Bootstrap `.active`
  isToggle?: boolean; // <-- For aria-pressed
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  as?: Elements;
  className?: string;
}
