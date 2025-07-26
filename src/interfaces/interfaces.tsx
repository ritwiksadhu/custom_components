export interface SearchItem {
  id: string;
  title: string;
  description: string;
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
}
