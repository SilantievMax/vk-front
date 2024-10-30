import { FC } from 'react';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';
import { LoaderProps } from './loader.props';

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  return <LoaderCircle className={cn('animate-spin stroke-primary', className)} />;
};
