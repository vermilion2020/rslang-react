import { Dispatch, SetStateAction } from "react";

interface UnitButtonProps {
  unit: number,
  setUnit: Dispatch<SetStateAction<number>>
}

export function UnitButton ({ unit, setUnit }: UnitButtonProps) {
  return (
    <button
      className={`select-unit unit-${unit}`}
      onClick={() => {setUnit(unit)}}
    >Раздел {unit}</button>
  );
}