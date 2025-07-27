import type { SearchItem } from '@/interfaces';

export interface SearchBarProps {
  data: SearchItem[];
  value: string;
  onChange: (value: string, keyboardNavigation?: Boolean) => void;
  onSearch: (item: SearchItem) => void;
  loading?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  label?: string;
}
