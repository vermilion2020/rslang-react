import { useContext } from "react";
import { UnitContext } from "../../context/UnitContext";

interface UnitProps {
  unit: number,
  hard?: boolean
}

export function Unit({ unit }: UnitProps) {
  const { unit: currentUnit, setUnit } = useContext(UnitContext);
  
  const className = unit === currentUnit ? `button unit-button current-unit` : `button unit-button`;
  return (
    <button className={className} onClick={() => setUnit(unit)}>
      {unit === 7 ? 'сложное' : `раздел ${unit}`}
      {unit === 7 ? <div className="lable-btn"></div> : ''}
    </button>
  );
}