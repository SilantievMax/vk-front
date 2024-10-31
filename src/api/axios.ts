import axios from 'axios';

const baseURL = 'https://registry.npmjs.org/-/v1';

export const instanceAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
