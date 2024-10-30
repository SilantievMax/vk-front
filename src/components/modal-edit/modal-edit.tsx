import { FC, useState } from 'react';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { Button } from '@/ui/button';
import { Pencil } from 'lucide-react';
import { Textarea } from '@/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/ui/dialog';
import { ModalEditProps } from './modal-edit.props';

export const ModalEdit: FC<ModalEditProps> = (props) => {
  const { description, name, version, onClick } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [nameValue, setNameValue] = useState(name);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [versionValue, setVersionValue] = useState(version);

  const handleEdit = () => {
    onClick({ description: descriptionValue, version: versionValue, name: nameValue });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button variant='outline' size='icon'>
          <Pencil className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all' />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit packages</DialogTitle>

          <DialogDescription>Make changes to your packages here. Click save when you're done.</DialogDescription>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input id='name' value={nameValue} onChange={(e) => setNameValue(e.target.value)} className='col-span-3' />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Version
            </Label>
            <Input id='name' value={versionValue} onChange={(e) => setVersionValue(e.target.value)} className='col-span-3' />
          </div>

          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Description
            </Label>
            <Textarea id='username' value={descriptionValue} onChange={(e) => setDescriptionValue(e.target.value)} className='col-span-3' />
          </div>
        </div>

        <DialogFooter>
          <Button type='submit' onClick={handleEdit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
