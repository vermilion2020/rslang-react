import { useContext } from "react";
import { GamePhase } from "../../models/Games"
import { SprintSelectUnit } from "./SprintSelectUnit"
import { GameContext } from "../../context/GameContext";
import './Sprint.scss';
import { GameCard } from "./GameCard";
import { useWords } from "../../hooks/words";
import { ErrorMessage } from "../ErrorMessage";
import { Loader } from "../Loader";
import { GameResults } from "./GameResults";

export function GameContainer () {
  const { phase, unit, currentWordIndex } = useContext(GameContext);
  const containerClass = unit ? `sprint-container unit-${unit}-container` : 'sprint-container';
  const { gameWords, loading, error } = useWords();

  return (
    <div className={containerClass}>
      { phase === GamePhase.selectUnit && <SprintSelectUnit /> }
      { error && <ErrorMessage error={error} /> }
      { phase === GamePhase.play && loading && <Loader /> }
      { phase === GamePhase.play && !loading && <GameCard word={gameWords[currentWordIndex]} /> }
      { phase === GamePhase.results && <GameResults /> }
    </div>
  );
  
}