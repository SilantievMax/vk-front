import { userServiceApi } from './npm-package.service';
import { GetNpmPackageOptions } from './npm-package.type';
import { instanceAxios } from '../axios';

jest.mock('../axios', () => ({
  instanceAxios: {
    get: jest.fn(),
  },
}));

describe('NpmPackageService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch npm packages successfully', async () => {
    const mockResponse = {
      data: {
        objects: [{ package: { name: 'react' } }],
        total: 1,
      },
    };
    (instanceAxios.get as jest.Mock).mockResolvedValue(mockResponse);

    const options: GetNpmPackageOptions = { currentPage: 1, pageSize: 10, search: 'react' };
    const response = await userServiceApi.getNpmPackage(options);

    expect(instanceAxios.get).toHaveBeenCalledWith(`search?text='react'&size=10&from=0`);
    expect(response.data).toEqual(mockResponse.data);
  });

  it('should handle fetch npm packages failure', async () => {
    (instanceAxios.get as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    const options: GetNpmPackageOptions = { currentPage: 1, pageSize: 10, search: 'react' };
    await expect(userServiceApi.getNpmPackage(options)).rejects.toThrow('Failed to fetch');
  });
});
