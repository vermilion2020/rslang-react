import { useContext } from "react";
import { GamePhase } from "../../models/Games"
import { SprintSelectUnit } from "./SprintSelectUnit"
import { GameContext } from "../../context/GameContext";
import { TimerNode } from './TimerNode';
import './Sprint.scss';

export function GameContainer () {
  const { phase, unit } = useContext(GameContext);
  const containerClass = unit ? `sprint-container unit-${unit}-container` : 'sprint-container';

  return (
    <div className={containerClass}>
      <div className="start-sprint">
        { phase === GamePhase.selectUnit && <SprintSelectUnit /> }
        { phase === GamePhase.play && <div>play</div> }
        { !!unit && <TimerNode secondsTotal={3} /> }
        </div>
    </div>
  );
  
}