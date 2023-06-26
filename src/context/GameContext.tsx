import { createContext, useState } from 'react';
import { GamePhase } from '../models/Games';


interface IGameContext {
  phase: GamePhase,
  setPhase: (phase: GamePhase) => void,
  unit: number,
  setUnit: (phase: GamePhase) => void,
}

export const GameContext = createContext<IGameContext>({
  phase: GamePhase.selectUnit,
  setPhase: () => {/**/},
  unit: 0,
  setUnit: () => {/**/}
});

export const GameState = ({ children }: { children: React.ReactNode }) => {
  const [phase, setPhase] = useState(GamePhase.selectUnit);
  const [unit, setUnit] = useState(0);

  return (
    <GameContext.Provider value={{ phase, setPhase, unit, setUnit }}>
      { children }
    </GameContext.Provider>
  );
}