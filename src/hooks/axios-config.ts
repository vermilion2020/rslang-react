import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from '../config-data';

axios.defaults.baseURL = API_BASE_URL;

axios.interceptors.request.use(
  (config) => config,
  (error: AxiosError) => {
    console.log(`err: ${error}`);
    if (error.response?.status === 502 || error.response?.status === 504) {
      console.log('Сервис недоступен');
      // TODO Add redirect to page for error handling
    }
  },
);

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      window.location.href = '/';
    } else if (error.response?.status === 417) {
      console.log('word is already in user words');
    }
  },
);

export default axios;
