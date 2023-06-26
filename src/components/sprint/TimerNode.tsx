import { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { GamePhase } from "../../models/Games";

interface TimerNodeProps {
  secondsTotal: number
}

export function TimerNode({ secondsTotal }: TimerNodeProps) {
  const { setPhase } = useContext(GameContext);
  const [seconds, setSeconds] = useState(secondsTotal);
  const deg = (360 * seconds) / secondsTotal + 180;
  const diagramClass = seconds >= secondsTotal / 2 ?
    'diagram timer unit-diagram over_50' :
    'diagram timer unit-diagram';
  const intervalRef = useRef(secondsTotal);
  const secondsUpdate = (seconds: number) => {
    if (seconds > 0) {
      setSeconds(seconds - 1);  
    } else {
      setPhase(GamePhase.play);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => secondsUpdate(seconds), 1000);
    return () => clearInterval(intervalRef.current);
  }, [seconds]);
  
  return (
    <div className={diagramClass}>
      <div className="piece left"></div>
      <div className="piece right" style={{ transform: `rotate(${deg}deg)` }}></div>
      <div className="text">
        <div>
          <b>{seconds}</b>
          <span>SECONDS</span>
        </div>
      </div>
    </div>
  );
}