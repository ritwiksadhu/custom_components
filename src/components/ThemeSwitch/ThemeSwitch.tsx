import React, { useEffect, useState } from 'react';
import { Switch } from '@/components';
import { Size } from '@/interfaces';

export const ThemeSwitch: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleToggle = (checked: boolean) => {
    setIsDark(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Switch
      checked={isDark}
      onChange={handleToggle}
      onIcon={<span style={{ fontSize: 14 }}>☀</span>}
      offIcon={<span style={{ fontSize: 14 }}>🌑</span>}
      size={Size.large}
    />
  );
};
