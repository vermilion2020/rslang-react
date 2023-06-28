import { useContext } from "react";
import { GamePhase } from "../../models/Games"
import { SprintSelectUnit } from "./SprintSelectUnit"
import { GameContext } from "../../context/GameContext";
import { TimerNode } from './TimerNode';
import './Sprint.scss';
import { GameCard } from "./GameCard";
import { useWords } from "../../hooks/words";

export function GameContainer () {
  const { phase, unit, currentWordIndex } = useContext(GameContext);
  const containerClass = unit ? `sprint-container unit-${unit}-container` : 'sprint-container';
  const { gameWords } = useWords();

  return (
    <div className={containerClass}>
      <div className="start-sprint">
        { phase === GamePhase.selectUnit && <SprintSelectUnit /> }
        { phase === GamePhase.play && 
          <GameCard word={gameWords[currentWordIndex]} />
        }
        { !!unit && phase === GamePhase.selectUnit && <TimerNode secondsTotal={3} /> }
        { phase === GamePhase.play && <div className="margin-top-80"><TimerNode secondsTotal={20} /></div> }
        </div>
    </div>
  );
  
}