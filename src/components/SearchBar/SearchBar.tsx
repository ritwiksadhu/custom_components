// SearchBar.tsx
import React, { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import clsx from 'clsx';
import { type SearchBarProps } from './SearchBar.props';
import styles from './SearchBar.module.scss';
import { Input } from '@/components';

export const SearchBar: React.FC<SearchBarProps> = ({
  items,
  onSelect,
  placeholder = 'Search...',
  disabled = false,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isKeyboardNavigating, setIsKeyboardNavigating] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const filteredItems = items?.filter((item) =>
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
    if (isOpen && hoveredIndex !== null && itemRefs.current[hoveredIndex]) {
      itemRefs.current[hoveredIndex]?.scrollIntoView({ block: 'nearest' });
    }
  }, [hoveredIndex, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setIsOpen(true);
    setHoveredIndex(null);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsKeyboardNavigating(true);
      setIsOpen(true);
      setHoveredIndex((prev) => {
        const next = prev === null ? 0 : (prev + 1) % filteredItems?.length;
        return next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIsKeyboardNavigating(true);
      setHoveredIndex((prev) => {
        const next =
          prev === null
            ? filteredItems.length - 1
            : (prev - 1 + filteredItems.length) % filteredItems?.length;
        return next;
      });
    } else if (e.key === 'Enter' && hoveredIndex !== null) {
      e.preventDefault();
      handleSelect(filteredItems[hoveredIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelect = (item: (typeof items)[0]) => {
    setSearchValue(item.title);
    setIsOpen(false);
    onSelect(item);
  };

  const handleMouseEnter = (index: number) => {
    setIsKeyboardNavigating(false);
    setHoveredIndex(index);
  };

  const getItemId = (index: number) => `searchbar-item-${index}`;

  return (
    <div
      ref={wrapperRef}
      className={clsx(styles.searchbarWrapper, className, { [styles.disabled]: disabled })}
    >
      <Input
        ref={inputRef}
        value={searchValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        variant="default"
        size="medium"
        label=""
        // focusCallback={() => setIsOpen(true)}
        className={styles.searchbarInput}
      />

      {isOpen && filteredItems.length > 0 && (
        <ul
          id="searchbar-dropdown"
          className={styles.searchbarDropdown}
          role="listbox"
          aria-activedescendant={hoveredIndex !== null ? getItemId(hoveredIndex) : undefined}
        >
          {filteredItems.map((item, index) => (
            <li
              key={item.id}
              id={getItemId(index)}
              // ref={(el) => (itemRefs.current[index] = el)} TODO: Uncomment if you want to use refs for items
              className={clsx(styles.searchbarItem, {
                active: item.title === searchValue,
                focused: isKeyboardNavigating && index === hoveredIndex,
              })}
              role="option"
              aria-selected={item.title === searchValue}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleSelect(item)}
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
