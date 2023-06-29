import { useContext } from "react";
import { GamePhase } from "../../models/Games"
import { AudioSelectUnit } from "./AudioSelectUnit"
import { GameContext } from "../../context/GameContext";
import './AudioChallenge.scss';
import { GameCard } from "./GameCard";
import { ErrorMessage } from "../ErrorMessage";
import { Loader } from "../Loader";
import { GameResults } from "./GameResults";
import { useGameWords } from "../../hooks/gameWords";

export function GameContainer () {
  const { loading, error } = useGameWords(4);
  const { phase, currentWordIndex, gameWords, unit } = useContext(GameContext);
  const containerClass = unit ? `sprint-container unit-${unit}-container` : 'sprint-container';
  
  return (
    <div className={containerClass}>
      { phase === GamePhase.selectUnit && <AudioSelectUnit /> }
      { error && <ErrorMessage error={error} /> }
      { phase === GamePhase.play && loading && <Loader /> }
      { phase === GamePhase.play && !loading && <GameCard word={gameWords[currentWordIndex]} /> }
      { phase === GamePhase.results && <GameResults /> }
    </div>
  );
}