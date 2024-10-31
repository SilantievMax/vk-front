import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Trash } from 'lucide-react';
import npmStore from '@/store/npm-store';
import useInfiniteScroll from './hooks/use-infinite-scroll';
import { Button } from '@/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/ui/table';
import { Loader } from '@/components/loader/loader';
import { ModalEdit } from '@/components/modal-edit/modal-edit';
import { NpmPackage } from '@/api/types';
import { PackagesListProps } from './packages-list.props';

const columns = [{ name: 'Name' }, { name: 'Version' }, { name: 'Description' }, { name: 'Links' }];

export const PackagesList: FC<PackagesListProps> = observer((props) => {
  const { className } = props;

  const { isLoading } = useInfiniteScroll();

  const onDeletePackages = (id: string) => {
    npmStore.delete(id);
  };

  const onEditPackages = (id: string, updatedPackage: Partial<NpmPackage>) => {
    npmStore.update(id, updatedPackage);
  };

  return (
    <>
      <Table className={className}>
        <TableHeader>
          <TableRow>
            {columns.map((column, index) => (
              <TableHead key={index}>{column.name}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {npmStore.packages.map((pkg) => (
            <TableRow key={pkg.id}>
              <TableCell>{pkg.name}</TableCell>

              <TableCell>{pkg.version}</TableCell>

              <TableCell>{pkg.description}</TableCell>

              <TableCell>
                <div className='flex flex-col text-sky-800'>
                  {Object.entries(pkg.links).map((arr) => (
                    <a key={arr[0]} href={arr[1]} target='_blank' className='text-blue-700 hover:underline'>
                      {arr[0]}
                    </a>
                  ))}
                </div>
              </TableCell>

              <TableCell className='text-right'>
                <div className='flex flex-col gap-2'>
                  <ModalEdit onClick={(data) => onEditPackages(pkg.id, data)} description={pkg.description} name={pkg.name} version={pkg.version} />

                  <Button variant='outline' size='icon' onClick={() => onDeletePackages(pkg.id)}>
                    <Trash className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all' />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isLoading && <Loader className='fixed bottom-3 right-1/2' />}
    </>
  );
});
