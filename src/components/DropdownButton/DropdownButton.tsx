import React, { useState } from 'react';
import styles from './DropdownButton.module.scss';
import { type DropdownButtonProps } from './DropdownButton.props';

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  items,
  selectedValue,
  onSelect,
  label,
}) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setOpen(false);
  };

  return (
    <div className={styles['dropdown-wrapper']}>
      <button className={styles['dropdown-toggle']} onClick={() => setOpen(!open)}>
        {label || items.find((item) => item.value === selectedValue)?.label}
      </button>
      {open && (
        <div className={styles['dropdown-menu']}>
          {items.map((item) => (
            <div
              key={item.value}
              className={`${styles['dropdown-item']} ${
                item.value === selectedValue ? styles['dropdown-item--active'] : ''
              }`}
              onClick={() => handleSelect(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
