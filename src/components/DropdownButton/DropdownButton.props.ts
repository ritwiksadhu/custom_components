import type { DropdownItem } from '@/interfaces';

export interface DropdownButtonProps {
  items: DropdownItem[];
  selectedValue: string | null;
  onSelect: (item: DropdownItem) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}
