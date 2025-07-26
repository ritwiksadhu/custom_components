import type { SearchItem } from '@/interfaces';

export interface SearchBarProps {
  data: SearchItem[];
  placeholder?: string;
  onSearch: (item: SearchItem) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
}
