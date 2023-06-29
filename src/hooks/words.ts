import { AxiosError } from  'axios';
import { useContext, useEffect, useState } from 'react';
import { IWordData } from '../models';
import axios from './axios-config';
import { UnitContext } from '../context/UnitContext';

export function useWords() {
  const { unit, page } = useContext(UnitContext);
  const [words, setWords] = useState<IWordData[]>([]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchWords(group: number, page: number) {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(`/words?group=${group}&page=${page}`);
      if (response && response.data) {
        setWords(response.data);
      } else {
        setError('Could not connect or receive data. Try later');
      }
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }
  
  useEffect(() => {
    fetchWords(unit, page);
  }, [unit, page]);

  return { loading, error, words, fetchWords };
}