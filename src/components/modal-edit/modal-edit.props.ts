import { NpmPackage } from '@/api/types';

export interface ModalEditProps {
  name: string;
  description: string;
  version: string;
  onClick: (updatedPackage: Partial<NpmPackage>) => void;
}
