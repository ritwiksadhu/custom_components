import { Button, DropdownButton, Input, ThemeSwitch } from '@/components';
import { SearchBar } from '@/components';
import type { DropdownItem, SearchItem } from './interfaces';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const searchData: SearchItem[] = [
  {
    id: '1',
    title: 'React Tutorial',
    description: 'Learn React step by step',
    // icon: <FiVideo />,
  },
  {
    id: '2',
    title: 'TypeScript Basics',
    description: 'Introduction to TypeScript',
    // icon: <FiUser />,
  },
  {
    id: '3',
    title: 'Search Components in React',
    description: 'Building a search bar with dropdown',
    // icon: <FiSearch />,
  },
];

const languageItems: DropdownItem[] = [
  { id: 'en', label: 'English', value: 'en' },
  { id: 'hi', label: 'Hindi', value: 'hi' },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState<SearchItem[]>([]);
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);

  const { t, i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageSelect = (item: { id: string; label: string }) => {
    i18n.changeLanguage(item.id);
    setSelectedLanguage(item.id);
  };
  // const [loading, setLoading] = useState(false);

  const handleOnChange = (value: string, keyboardNavigation: boolean) => {
    setKeyboardNavigation(keyboardNavigation);
    setQuery(value);
  };

  useEffect(() => {
    console.log('Query changed:', query);
    console.log('Keyboard navigation:', keyboardNavigation);
    if (keyboardNavigation) return;
    if (query.trim() === '') {
      setFilteredData([]);
      return;
    }

    // setLoading(true);
    const timer = setTimeout(() => {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredData(filtered);
      // setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSearch = (item: SearchItem) => {
    console.log('Searching for:', item);
  };

  return (
    <div className="App">
      <Button text={'hello world'} />
      <Input
        label={t('Welcome to React')}
        value={''}
        onChange={() => {}}
        // onFocus={() => {}}
        onKeyDown={() => {}}
        disabled={false}
      />
      <SearchBar
        data={filteredData}
        value={query}
        // @ts-ignore
        onChange={handleOnChange}
        onSearch={handleSearch}
        label="Search"
      />

      <ThemeSwitch />

      <DropdownButton
        items={languageItems}
        selectedValue={selectedLanguage}
        // @ts-ignore
        onSelect={handleLanguageSelect}
        label="Select Language"
      />
    </div>
  );
}
