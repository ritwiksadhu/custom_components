import { Variant } from '@/interfaces';
import { type JSX } from 'react';

export interface TextProps {
  tx?: string;
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
  muted?: boolean;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  align?: 'left' | 'center' | 'right';
  className?: string;
  children?: React.ReactNode;
}
