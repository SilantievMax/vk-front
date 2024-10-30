import { useEffect } from 'react';
import npmStore from '@/store/npm-store';

const useInfiniteScroll = () => {
  const handleScroll = (): void => {
    const { scrollTop, scrollHeight } = document.documentElement;
    const windowHeight = window.innerHeight;

    if (scrollHeight - (scrollTop + windowHeight) < 100 && npmStore.packages.length < npmStore.totalPackages) {
      npmStore.setFetching(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (npmStore.fetching) {
      npmStore.fetchPackages();
    }
  }, [npmStore.fetching]);

  return {
    isLoading: npmStore.fetching,
  };
};

export default useInfiniteScroll;
