import { type InputHTMLAttributes } from 'react';
import { type OverrideProps } from '@/interfaces';

export interface SearchItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

interface BaseProps {
  items: SearchItem[];
  onSelect: (item: SearchItem) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export type SearchBarProps = OverrideProps<InputHTMLAttributes<HTMLInputElement>, BaseProps>;
