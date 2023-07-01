import { createContext, useRef, useState } from 'react';
import { GamePhase } from '../models/Games';
import { CheckedWord, GameWordData } from '../models';


interface IGameContext {
  phase: GamePhase,
  setPhase: (phase: GamePhase) => void,
  unit: number,
  setUnit: (unit: number) => void,
  page: number,
  setPage: (page: number) => void,
  currentWordIndex: number,
  setCurrentWordIndex: (currentWordIndex: number) => void,
  correct: number,
  setCorrect: (correct: number) => void,
  translates: string[],
  setTranslates: (translates: string[]) => void,
  checkedWords: CheckedWord[],
  setCheckedWords: (checkedWords: CheckedWord[]) => void,
  successInRope: number,
  setSuccessInRope: (successInRope: number) => void,
  maxSuccess: number,
  setMaxSuccess: (maxSuccess: number) => void,
  totalScore: number,
  setTotalScore: (totalScore: number) => void,
  gameWords: GameWordData[],
  setGameWords: (gameWords: GameWordData[]) => void,
  audioRef: unknown
}

export const GameContext = createContext<IGameContext>({
  phase: GamePhase.selectUnit,
  setPhase: () => {/**/},
  unit: 0,
  setUnit: () => {/**/},
  page: 0,
  setPage: () => {/**/},
  currentWordIndex: 0,
  setCurrentWordIndex: () => {/**/},
  correct: 0,
  setCorrect: () => {/**/},
  translates: [],
  setTranslates: () => {/**/},
  checkedWords: [],
  setCheckedWords: () => {/**/},
  successInRope: 0,
  setSuccessInRope: () => {/**/},
  maxSuccess: 0,
  setMaxSuccess: () => {/**/},
  totalScore: 0,
  setTotalScore: () => {/**/},
  gameWords: [],
  setGameWords: () => {/**/},
  audioRef: () => {/**/}
});

export const GameState = ({ children }: { children: React.ReactNode }) => {
  const [phase, setPhase] = useState(GamePhase.selectUnit);
  const [unit, setUnit] = useState(0);
  const [page, setPage] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [translates, setTranslates] = useState<string[]>([]);
  const [checkedWords, setCheckedWords] = useState<CheckedWord[]>([]);
  const [successInRope, setSuccessInRope] = useState(0);
  const [maxSuccess, setMaxSuccess] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [gameWords, setGameWords] = useState<GameWordData[]>([]);
  const audioRef = useRef(null);

  return (
    <GameContext.Provider value={{
        phase,
        setPhase,
        unit,
        setUnit,
        page,
        setPage,
        correct, 
        setCorrect,
        translates, 
        setTranslates,
        checkedWords,
        setCheckedWords,
        successInRope,
        setSuccessInRope,
        maxSuccess,
        setMaxSuccess,
        currentWordIndex,
        setCurrentWordIndex,
        totalScore,
        setTotalScore,
        gameWords,
        setGameWords,
        audioRef
      }}>
      { children }
      <audio src="" ref={audioRef} controls id="audio" className="hidden"></audio>
    </GameContext.Provider>
  );
}