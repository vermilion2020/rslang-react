import { AxiosError } from  'axios';
import { useContext, useEffect, useState } from 'react';
import { GamePhase } from '../models';
import axios from './axios-config';
import { GameContext } from '../context/GameContext';

export function useGameWords(countWords=1) {
  const { currentWordIndex, setPhase, gameWords, setGameWords, unit, page } = useContext(GameContext);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchGameWords(group: number, page: number, count = countWords) {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(`/words/gameWords/${count}?group=${group}&page=${page}`);
      if (response && response.data) {
        
        setGameWords([...gameWords, ...response.data]);
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
    fetchGameWords(unit, page);
    
    if (currentWordIndex && gameWords[currentWordIndex] === undefined) {
      setPhase(GamePhase.results);
    }
  }, [unit, page]);

  return { loading, error, gameWords, fetchGameWords, page };
}