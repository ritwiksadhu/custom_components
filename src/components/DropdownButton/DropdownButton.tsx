import React, { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import clsx from 'clsx';
import { type DropdownButtonProps } from './DropdownButton.props';
import styles from './DropdownButton.module.scss';

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  items,
  selectedValue,
  onSelect,
  placeholder = 'Select',
  disabled = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedItem = items.find((item) => item.id === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && focusedIndex !== null) {
      const item = listRef.current?.children[focusedIndex] as HTMLElement;
      item?.focus();
      item?.scrollIntoView({ block: 'nearest' });
    }
  }, [isOpen, focusedIndex]);

  const toggleDropdown = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setFocusedIndex(null);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (disabled) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(0);
      } else {
        setFocusedIndex((prev) => {
          const next = prev === null ? 0 : (prev + 1) % items.length;
          return next;
        });
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (isOpen) {
        setFocusedIndex((prev) => {
          const next = prev === null ? items.length - 1 : (prev - 1 + items.length) % items.length;
          return next;
        });
      }
    } else if (e.key === 'Enter' && focusedIndex !== null) {
      e.preventDefault();
      onSelect(items[focusedIndex]);
      setIsOpen(false);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleItemClick = (index: number) => {
    onSelect(items[index]);
    setIsOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={clsx(styles.dropdownWrapper, className, { [styles.disabled]: disabled })}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <button
        ref={buttonRef}
        className={styles.dropdownButton}
        onClick={toggleDropdown}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedItem ? selectedItem.label : placeholder}
      </button>
      {isOpen && (
        <ul
          className={styles.dropdownList}
          role="listbox"
          ref={listRef}
          aria-activedescendant={
            focusedIndex !== null ? `dropdown-item-${focusedIndex}` : undefined
          }
        >
          {items.map((item, index) => (
            <li
              key={item.id}
              id={`dropdown-item-${index}`}
              className={clsx(styles.dropdownItem, {
                [styles.active]: item.id === selectedValue,
                [styles.focused]: index === focusedIndex,
              })}
              role="option"
              aria-selected={item.id === selectedValue}
              tabIndex={-1}
              onMouseEnter={() => setFocusedIndex(index)}
              onClick={() => handleItemClick(index)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
