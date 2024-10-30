import { useState } from 'react';
import { Search } from 'lucide-react';
import npmStore from '@/store/npm-store';
import { observer } from 'mobx-react-lite';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';
import { ModeToggle } from '@/components/mode-toggle/mode-toggle';

export const Menu = observer(() => {
  const [inputValue, setInputValue] = useState(npmStore.search);

  const handleSearch = () => {
    npmStore.setSearch(inputValue);
  };

  return (
    <div className='fixed top-0 z-10 ml-auto mr-auto flex w-full max-w-7xl justify-between border-b bg-background py-4'>
      <h1 className='text-2xl font-bold'>
        NPM Package List - {npmStore.totalPackages} |{' '}
        <span className='text-base text-foreground/50'>
          {npmStore.currentPage - 1}/{Math.ceil(npmStore.totalPackages / npmStore.pageSize)}
        </span>
      </h1>

      <div className='flex w-2/4 items-center gap-1'>
        <Input placeholder='Enter name  package' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

        <Button variant='outline' size='icon' onClick={handleSearch}>
          <Search className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all' />
        </Button>
      </div>
      <ModeToggle />
    </div>
  );
});
