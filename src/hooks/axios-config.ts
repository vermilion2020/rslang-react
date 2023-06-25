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

axios.interceptors.response.use(null, (error) => {
  return Promise.reject(error);
});

export default axios;
