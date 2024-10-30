import { v4 as uuidv4 } from 'uuid';
import { makeAutoObservable } from 'mobx';
import { userServiceApi } from '@/api';
import { NpmPackage } from '@/api/types';

class NpmStore {
  packages: NpmPackage[] = [];
  totalPackages = 0;
  currentPage = 1;
  pageSize = 40;
  fetching = true;
  search = '';

  constructor() {
    makeAutoObservable(this);
  }

  setFetching(fetching: boolean) {
    this.fetching = fetching;
  }

  delete(id: string) {
    this.packages = this.packages.filter((pkg) => pkg.id !== id);
  }

  update(id: string, updatedPackage: Partial<NpmPackage>) {
    this.packages = this.packages.map((pkg) => (pkg.id === id ? { ...pkg, ...updatedPackage } : pkg));
  }

  setSearch(value: string) {
    this.search = value;

    this.packages = [];
    this.totalPackages = 0;
    this.currentPage = 1;
    this.fetchPackages();
  }

  async fetchPackages() {
    userServiceApi
      .getNpmPackage({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        search: this.search,
      })
      .then(({ data }) => {
        const dataPackages = data.objects.map((obj) => ({
          ...obj.package,
          id: uuidv4(),
        }));

        this.packages = [...this.packages, ...dataPackages];
        this.totalPackages = data.total;

        this.currentPage += 1;
      })
      .catch((err) => console.error('Failed to fetch packages:', err))
      .finally(() => this.setFetching(false));
  }
}

export default new NpmStore();
