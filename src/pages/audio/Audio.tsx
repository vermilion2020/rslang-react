import { GameState } from "../../context/GameContext";
import { GameContainer } from "../../components/audio/GameContainer";

export function Audio() {

  return (
    <GameState>
      <GameContainer />
    </GameState>
  );
}