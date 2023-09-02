import { useContext } from "react";
import { GamePhase } from "../../models/Games"
import { AudioSelectUnit } from "./AudioSelectUnit"
import { GameContext } from "../../context/GameContext";
import './Audio.scss';
import { GameCard } from "./GameCard";
import { ErrorMessage } from "../ErrorMessage";
import { Loader } from "../Loader";
import { GameResults } from "../common/GameResults";
import { useGameWords } from "../../hooks/gameWords";

export function GameContainer () {
  const { phase, currentWordIndex, gameWords, unit, page } = useContext(GameContext);
  const { loading, error } = useGameWords(unit, page, 4);
  const containerClass = unit ? `game-container audio unit-${unit}-container` : 'game-container audio';
  
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