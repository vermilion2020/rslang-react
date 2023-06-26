import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

interface UnitButtonProps {
  unit: number
}

export function UnitButton ({ unit }: UnitButtonProps) {
  const { setUnit } = useContext(GameContext);

  return (
    <button
      className={`select-unit unit-${unit}`}
      onClick={() => {setUnit(unit)}}
    >Раздел {unit}</button>
  );
}