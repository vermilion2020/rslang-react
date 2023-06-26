import { GameState } from "../../context/GameContext";
import { GameContainer } from "../../components/sprint/GameContainer";

export function Sprint() {

  return (
    <GameState>
      <GameContainer />
    </GameState>
  );
}