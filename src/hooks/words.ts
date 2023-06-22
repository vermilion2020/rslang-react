import { AxiosError } from  'axios';
import { useEffect, useState } from 'react';
import { IWordData } from '../models';
import axios from './axios-config';


export function useWords(unit = 1, page = 1) {
  const [words, setWords] = useState<IWordData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchWords(group: number, page: number) {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(`/words?group=${group}&page=${page}`);
      setWords(response.data);
      console.log(response.data)
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
    
  }
  
  useEffect(() => {
    fetchWords(unit, page);
  }, []);

  return { loading, error, words, fetchWords };
}