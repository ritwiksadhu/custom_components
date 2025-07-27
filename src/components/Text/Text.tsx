import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Text.module.scss';
import { type TextProps } from './Text.props';
import clsx from 'clsx';
import { Variant } from '@/interfaces';

export const Text: React.FC<TextProps> = ({
  tx,
  as = 'p',
  variant = Variant.default,
  muted = false,
  bold = false,
  italic = false,
  underline = false,
  align = 'left',
  className,
  children,
}) => {
  const { t } = useTranslation();
  const Element = as;
  const textContent = tx ? t(tx) : null;

  const combinedClass = clsx(
    styles.text,
    styles[variant],
    muted && styles.muted,
    bold && styles.bold,
    italic && styles.italic,
    underline && styles.underline,
    align && styles[`align-${align}`],
    className,
  );

  return (
    <Element className={combinedClass}>
      {textContent}
      {children}
    </Element>
  );
};
