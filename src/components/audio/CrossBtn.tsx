import { GameContext } from "../../context/GameContext";
import { GamePhase } from "../../models";
import { useContext } from 'react';

export function CrossBtn() {
  const { setPhase } = useContext(GameContext);
  const handleClose = () => {
    setPhase(GamePhase.selectUnit);
  }

  return (
    <div
      className="close-audio__game"
      id="close-audio"
      onClick={handleClose}
    >
      <a className="close-audio__gamepage"><div className="close-crose__white"></div></a>
    </div>
  );
}