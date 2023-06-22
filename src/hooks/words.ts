import { AxiosError } from  'axios';
import { useEffect, useState } from 'react';
import { IWordData } from '../models';
import axios from './axios-config';


export function useWords() {
  const [words, setWords] = useState<IWordData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchWords(group: number, page: number) {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(`/words?group=${group}&page=${page}`);
      setWords(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
    
  }
  
  useEffect(() => {
    fetchWords(1, 1);
  }, []);

  return { loading, error, words };
}