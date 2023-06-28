import { createContext, useState } from 'react';
import { GamePhase } from '../models/Games';
import { CheckedWord, GameWordData } from '../models';


interface IGameContext {
  phase: GamePhase,
  setPhase: (phase: GamePhase) => void,
  unit: number,
  setUnit: (phase: GamePhase) => void,
  currentWordIndex: number,
  setCurrentWordIndex: (currentWordIndex: number) => void,
  currentWord: GameWordData,
  setCurrentWord: (currentWord: GameWordData) => void,
  checkedWords: CheckedWord[],
  setCheckedWords: (checkedWords: CheckedWord[]) => void,
  successInRope: number,
  setSuccessInRope: (successInRope: number) => void,
  maxSuccess: number,
  setMaxSuccess: (maxSuccess: number) => void,
  totalScore: number,
  setTotalScore: (totalScore: number) => void,
}

export const GameContext = createContext<IGameContext>({
  phase: GamePhase.selectUnit,
  setPhase: () => {/**/},
  unit: 0,
  setUnit: () => {/**/},
  currentWordIndex: 0,
  setCurrentWordIndex: () => {/**/},
  currentWord: {} as GameWordData,
  setCurrentWord: () => {/**/},
  checkedWords: [],
  setCheckedWords: () => {/**/},
  successInRope: 0,
  setSuccessInRope: () => {/**/},
  maxSuccess: 0,
  setMaxSuccess: () => {/**/},
  totalScore: 0,
  setTotalScore: () => {/**/},
});

export const GameState = ({ children }: { children: React.ReactNode }) => {
  const [phase, setPhase] = useState(GamePhase.selectUnit);
  const [unit, setUnit] = useState(0);
  const [checkedWords, setCheckedWords] = useState<CheckedWord[]>([]);
  const [successInRope, setSuccessInRope] = useState(0);
  const [maxSuccess, setMaxSuccess] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [currentWord, setCurrentWord] = useState<GameWordData>({} as GameWordData);

  return (
    <GameContext.Provider value={{
        phase,
        setPhase,
        unit,
        setUnit,
        checkedWords,
        setCheckedWords,
        successInRope,
        setSuccessInRope,
        maxSuccess,
        setMaxSuccess,
        currentWordIndex,
        setCurrentWordIndex,
        currentWord,
        setCurrentWord,
        totalScore,
        setTotalScore
      }}>
      { children }
    </GameContext.Provider>
  );
}