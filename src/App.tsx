import { Button, Input } from '@/components';
import './styles.css';
import { SearchBar } from '@/components';
import type { SearchItem } from './interfaces';

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

export default function App() {
  const handleSearch = (item: SearchItem) => {
    console.log('Selected Item:', item);
    // You can now trigger API search, navigation, etc.
  };

  return (
    <div className="App">
      <Button text={'hello world'} />
      <Input
        label={'abcd'}
        value={''}
        onChange={() => {}}
        // onFocus={() => {}}
        onKeyDown={() => {}}
        disabled={false}
      />
      <SearchBar data={searchData} onSearch={handleSearch} label="abcd" />
    </div>
  );
}
