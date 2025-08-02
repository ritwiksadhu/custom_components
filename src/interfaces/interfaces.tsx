export interface SearchItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
}
export type OverrideProps<T, U> = Omit<T, keyof U> & U;

export enum Variant {
  primary = 'primary',
  secondary = 'secondary',
  outline = 'outline',
  default = 'default',
  error = 'error',
}

export enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum Elements {
  button = 'button',
  link = 'a',
  Paragraph = 'p',
  heading1 = 'h1',
  heading2 = 'h2',
  heading3 = 'h3',
  heading4 = 'h4',
  heading5 = 'h5',
  heading6 = 'h6',
  span = 'span',
  div = 'div',
  label = 'label',
  select = 'select',
  option = 'option',
  ul = 'ul',
  li = 'li',
}

export interface DropdownItem {
  label: string;
  value: string;
  id?: string;
}
