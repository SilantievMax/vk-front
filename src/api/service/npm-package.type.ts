export interface NpmPackage {
  id: string;
  date: Date;
  name: string;
  version: string;
  keywords: string[];
  description: string;
  author: {
    name: string;
  };
  publisher: {
    username: string;
    email: string;
  };
  links: {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
  };
}

export interface GetNpmPackageResponse {
  objects: {
    package: NpmPackage;
  }[];
  total: number;
}

export interface GetNpmPackageOptions {
  pageSize: number;
  currentPage: number;
  search?: string;
}
