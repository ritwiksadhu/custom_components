// SearchBar.tsx
import React, { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import clsx from 'clsx';
import { type SearchBarProps } from './SearchBar.props';
import styles from './SearchBar.module.scss';

export const SearchBar: React.FC<SearchBarProps> = ({
  items,
  onSelect,
  placeholder = 'Search...',
  disabled = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && focusedIndex !== null && listRef.current) {
      const item = listRef.current.children[focusedIndex] as HTMLElement;
      item?.scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setIsOpen(true);
    setFocusedIndex(null);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsOpen(true);
      setFocusedIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % filteredItems.length;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex((prev) => {
        if (prev === null) return filteredItems.length - 1;
        return (prev - 1 + filteredItems.length) % filteredItems.length;
      });
    } else if (e.key === 'Enter' && focusedIndex !== null) {
      e.preventDefault();
      handleSelect(filteredItems[focusedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelect = (item: (typeof items)[0]) => {
    setSearchValue(item.title);
    setIsOpen(false);
    onSelect(item);
  };

  const handleItemMouseEnter = (index: number) => {
    setFocusedIndex(index);
  };

  const getItemId = (index: number) => `searchbar-item-${index}`;

  return (
    <div
      ref={wrapperRef}
      className={clsx(styles.searchbarWrapper, className, { [styles.disabled]: disabled })}
    >
      <input
        ref={inputRef}
        type="text"
        className={styles.searchbarInput}
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-autocomplete="list"
        aria-controls="searchbar-dropdown"
        aria-expanded={isOpen}
      />
      {isOpen && filteredItems.length > 0 && (
        <ul
          id="searchbar-dropdown"
          className={styles.searchbarDropdown}
          role="listbox"
          ref={listRef}
          aria-activedescendant={focusedIndex !== null ? getItemId(focusedIndex) : undefined}
        >
          {filteredItems.map((item, index) => (
            <li
              key={item.id}
              id={getItemId(index)}
              className={clsx(styles.searchbarItem, {
                [styles.active]: item.title === searchValue,
                [styles.focused]: index === focusedIndex,
              })}
              role="option"
              aria-selected={index === focusedIndex}
              onMouseEnter={() => handleItemMouseEnter(index)}
              onClick={() => handleSelect(item)}
              tabIndex={-1}
            >
              {item.icon && <span className={styles['searchbarItem-icon']}>{item.icon}</span>}
              <span className={styles['searchbarItem-content']}>
                <span className={styles['searchbarItem-title']}>{item.title}</span>
                {item.description && (
                  <span className={styles['searchbarItem-description']}>{item.description}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

SearchBar.displayName = 'SearchBar';
