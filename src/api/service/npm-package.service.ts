import { AxiosResponse } from 'axios';
import { instanceAxios } from '../axios';
import { GetNpmPackageOptions, GetNpmPackageResponse } from './npm-package.type';

class NpmPackageService {
  getNpmPackage(option: GetNpmPackageOptions): Promise<AxiosResponse<GetNpmPackageResponse>> {
    const { currentPage, pageSize, search = '' } = option;

    return instanceAxios.get(`search?text='${search}'&size=${pageSize}&from=${(currentPage - 1) * pageSize}`);
  }
}

export const userServiceApi = new NpmPackageService();
