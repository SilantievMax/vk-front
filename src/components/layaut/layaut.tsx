import { FC, PropsWithChildren } from 'react';

export const Layaut: FC<PropsWithChildren> = ({ children }) => {
  return <div className='ml-auto mr-auto flex max-w-7xl flex-col gap-4 px-2 pt-4'>{children}</div>;
};
