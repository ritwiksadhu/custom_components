import type { DropdownItem } from '@/interfaces';

export interface DropdownButtonProps {
  items: DropdownItem[];
  selectedValue: string;
  onSelect: (value: string) => void;
  label?: string;
}
