import { useContext } from "react";
import { GamePhase } from "../../models/Games"
import { SprintSelectUnit } from "./SprintSelectUnit"
import { GameContext } from "../../context/GameContext";

export function GameContainer () {
  const { phase, unit } = useContext(GameContext);
  const containerClass = unit ? `sprint-container unit-${unit}-container` : 'sprint-container';

  return (
    <div className={containerClass}>
      { phase === GamePhase.selectUnit && <SprintSelectUnit /> }
      { phase === GamePhase.play && <div>play</div> }
    </div>
  );
  
}