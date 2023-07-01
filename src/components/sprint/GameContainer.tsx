import { useContext } from "react";
import { GamePhase } from "../../models/Games"
import { SprintSelectUnit } from "./SprintSelectUnit"
import { GameContext } from "../../context/GameContext";
import './Sprint.scss';
import '../common/GameCommon.scss';
import { GameCard } from "./GameCard";
import { ErrorMessage } from "../ErrorMessage";
import { Loader } from "../Loader";
import { GameResults } from "../common/GameResults";
import { useGameWords } from "../../hooks/gameWords";

export function GameContainer () {
  const { loading, error } = useGameWords();
  const { phase, currentWordIndex, gameWords, unit } = useContext(GameContext);
  const containerClass = unit ? `game-container unit-${unit}-container` : 'game-container';
  
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