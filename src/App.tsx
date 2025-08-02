import { Button, DropdownButton, Input, ThemeSwitch, SearchBar } from '@/components';
import type { DropdownItem, SearchItem } from './interfaces';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const searchData: SearchItem[] = [
  { id: '1', title: 'React Tutorial', description: 'Learn React step by step' },
  { id: '2', title: 'TypeScript Basics', description: 'Introduction to TypeScript' },
  {
    id: '3',
    title: 'Search Components in React',
    description: 'Building a search bar with dropdown',
  },
];

const languageItems: DropdownItem[] = [
  { id: 'en', label: 'English', value: 'en' },
  { id: 'hi', label: 'Hindi', value: 'hi' },
];

export default function App() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [input1, setInput1] = useState('');

  const handleLanguageSelect = (item: DropdownItem) => {
    i18n.changeLanguage(item.id!); // ensure id is defined
    setSelectedLanguage(item.id!);
  };

  const handleSearch = (item: SearchItem) => {
    console.log('Searching for:', item);
  };

  return (
    <div className="App">
      <Button text="Hello World" />

      <Input
        label={t('Welcome to React')}
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        disabled={false}
      />

      <SearchBar items={searchData} onSelect={handleSearch} placeholder="Search something..." />

      <ThemeSwitch />

      <DropdownButton
        items={languageItems}
        selectedValue={selectedLanguage}
        onSelect={handleLanguageSelect}
        placeholder="Select Language"
      />
    </div>
  );
}
