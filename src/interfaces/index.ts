export type OverrideProps<T, U> = Omit<T, keyof U> & U;

export enum Variant {
  primary = "primary",
  secondary = "secondary",
  outline = "outline",
}

export enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum Elements {
  button = "button",
  link = "a",
}
