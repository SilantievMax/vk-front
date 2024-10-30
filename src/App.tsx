import { Menu } from '@/components/menu/menu';
import { Layaut } from '@/components/layaut/layaut';
import { PackagesList } from '@/components/packages-list/packages-list';
import { ThemeProvider } from '@/components/theme-provider/theme-provider';

const App = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Layaut>
        <Menu />

        <PackagesList className='mt-20' />
      </Layaut>
    </ThemeProvider>
  );
};

export default App;
