import { AxiosError } from  'axios';
import { useContext, useEffect, useState } from 'react';
import { GameWordData, IWordData } from '../models';
import axios from './axios-config';
import { UnitContext } from '../context/UnitContext';
import { GameContext } from '../context/GameContext';

export function useWords() {
  const { unit, page } = useContext(UnitContext);
  const [words, setWords] = useState<IWordData[]>([]);
  const [gameWords, setGameWords] = useState<GameWordData[]>([]);
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

  async function fetchGameWords(group: number, page: number, count = 1) {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(`/words/gameWords/${count}?group=${group}&page=${page}`);
      if (response && response.data) {
        setGameWords(response.data);
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
    fetchGameWords(unit, page);
  }, [unit, page]);

  return { loading, error, words, fetchWords, gameWords };
}