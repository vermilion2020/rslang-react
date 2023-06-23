import { useContext } from "react";
import { UnitContext } from "../../context/UnitContext";

interface UnitProps {
  unit: number,
  hard?: boolean
}

export function Unit({ unit }: UnitProps) {
  const { unit: currentUnit, setUnit } = useContext(UnitContext);
  const handleUnitSelect = (unit: number) => {
    setUnit(unit);
    localStorage.setItem('unit', `${unit}`);
  }

  const className = unit === currentUnit ? `button unit-button current-unit` : `button unit-button`;
  return (
    <button className={className} onClick={() => handleUnitSelect(unit)}>
      {unit === 6 ? 'сложное' : `раздел ${unit + 1}`}
      {unit === 6 ? <div className="lable-btn"></div> : ''}
    </button>
  );
}