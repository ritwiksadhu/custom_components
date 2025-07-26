import React, { useState, useRef, useEffect } from 'react';
import styles from './SearchBar.module.scss';
import clsx from 'clsx';
import { Input } from '@/components';
import type { SearchBarProps } from './SearchBar.props';

export const SearchBar: React.FC<SearchBarProps> = ({
  data,
  onSearch,
  disabled = false,
  className,
  label = '',
}) => {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(data);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(filtered);
    setShowDropdown(true);
    setActiveIndex(-1);
    setHoveredIndex(null);
  };

  const handleSelect = (item: (typeof data)[0]) => {
    setQuery(item.title);
    setShowDropdown(false);
    onSearch(item);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = Math.min(activeIndex + 1, filteredItems.length - 1);
      setActiveIndex(nextIndex);
      setHoveredIndex(null);
      setQuery(filteredItems[nextIndex]?.title || '');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = Math.max(activeIndex - 1, 0);
      setActiveIndex(prevIndex);
      setHoveredIndex(null);
      setQuery(filteredItems[prevIndex]?.title || '');
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      handleSelect(filteredItems[activeIndex]);
    }
  };

  return (
    <div className={clsx(styles['searchbar-wrapper'], className)} ref={wrapperRef}>
      <Input
        label={label}
        value={query}
        onChange={handleChange}
        focusCallback={() => setShowDropdown(true)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />

      {showDropdown && filteredItems.length > 0 && (
        <ul className={styles['searchbar-dropdown']}>
          {filteredItems.map((item, index) => {
            const isActive = index === activeIndex && hoveredIndex === null;
            const isHovered = index === hoveredIndex;
            return (
              <li
                key={item.id}
                className={clsx(styles['searchbar-item'], {
                  [styles['searchbar-item--active']]: isActive,
                  [styles['searchbar-item--hovered']]: isHovered,
                })}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseDown={() => handleSelect(item)}
              >
                <span className={styles['searchbar-item-icon']}>{item.icon}</span>
                <div className={styles['searchbar-item-content']}>
                  <p className={styles['searchbar-item-title']}>{item.title}</p>
                  <p className={styles['searchbar-item-description']}>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
