import { AxiosError } from  'axios';
import { useContext, useEffect, useState } from 'react';
import { GamePhase, GameWordData } from '../models';
import axios from './axios-config';
import { GameContext } from '../context/GameContext';
import { COUNT_AUDIO_OPTIONS } from '../config-data';
import { UnitContext } from '../context/UnitContext';

export function useGameWords(unit: number, page: number, countWords=1) {
  const { currentWordIndex, setPhase, gameWords, setGameWords, setCorrect, setTranslates, translates } = useContext(GameContext);
  const { chapter } = useContext(UnitContext);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!unit) {
    unit = 0;
  }

  if (!page) {
    page = 0;
  }

  async function fetchGameWords(group: number, page: number, count = countWords) {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get(`/words/gameWords/${count}?group=${group}&page=${page}`);
      if (response && response.data) {
        setGameWords([...gameWords, ...response.data]);
        if (!translates.length && chapter === 'audio') {
          randomTranslates(response.data[0]);
        } else if (!translates.length && chapter === 'sprint') {
          randomResult(response.data[0]);
        }
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

  function randomTranslates(word: GameWordData) {
    const correct = Math.floor(Math.random() * COUNT_AUDIO_OPTIONS);
    const translates = [...word.translates];
    translates.splice(correct, 0, word.wordTranslate);
    setCorrect(correct);
    setTranslates(translates);
  }

  function randomResult(word: GameWordData) {
    const correct = Math.round(Math.random());
    let translate = '';
    translate = correct ? word.wordTranslate : word.translates[0];
    setCorrect(correct);
    setTranslates([translate]);
  }
  
  useEffect(() => {
    fetchGameWords(unit, page);
    if (currentWordIndex && gameWords[currentWordIndex] === undefined) {
      setPhase(GamePhase.results);
    }
  }, [unit, page]);

  return { loading, error, gameWords, fetchGameWords, page, randomTranslates, randomResult };
}