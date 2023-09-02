import { useContext } from 'react';
import { AUDIO_COUNT_ATTEMPTS } from "../../config-data";
import { GameContext } from "../../context/GameContext";

export function ProgressBar() {
  const { checkedWords } = useContext(GameContext);
  const currentAttempt = checkedWords.length + 1;
  const gradient = Math.round(((AUDIO_COUNT_ATTEMPTS - (AUDIO_COUNT_ATTEMPTS - currentAttempt)) / AUDIO_COUNT_ATTEMPTS) * 100) * 3.6;
  const style = `conic-gradient(#65D72F ${gradient}deg, #E9E9E9 0deg)`;

  return (
    <div className="progress">
      <div className="out">
        <div className="container">
          <div className="progress-circular" style={{ background: style }}>
            <div className="inside-progress">
              <span className="current-step">{currentAttempt}</span> / <span className="value-total">{AUDIO_COUNT_ATTEMPTS}</span>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}