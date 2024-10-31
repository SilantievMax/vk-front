import '@testing-library/jest-dom';
import NpmStore from './npm-store';
import { userServiceApi } from '@/api';
import { NpmPackage } from '@/api/types';

jest.mock('@/api', () => ({
  userServiceApi: {
    getNpmPackage: jest.fn(),
  },
}));

describe('NpmStore', () => {
  let store: typeof NpmStore;

  beforeEach(() => {
    store = NpmStore;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set fetching state', () => {
    store.setFetching(true);
    expect(store.fetching).toBe(true);
  });

  it('should delete a package', () => {
    const packageId = '1';
    store.packages = [{ id: packageId, name: 'test-package' } as NpmPackage];
    store.delete(packageId);
    expect(store.packages.length).toBe(0);
  });

  it('should update a package', () => {
    const packageId = '1';
    store.packages = [{ id: packageId, name: 'test-package' } as NpmPackage];
    store.update(packageId, { name: 'updated-package' });
    expect(store.packages[0].name).toBe('updated-package');
  });

  it('should set search and fetch packages', async () => {
    const searchValue = 'react';
    const mockResponse = {
      data: {
        objects: [{ package: { name: 'react' } }],
        total: 1,
      },
    };
    (userServiceApi.getNpmPackage as jest.Mock).mockResolvedValue(mockResponse);

    await store.setSearch(searchValue);

    expect(store.search).toBe(searchValue);
    expect(store.packages.length).toBe(1);
    expect(store.totalPackages).toBe(1);
    expect(store.currentPage).toBe(2);
  });
});
