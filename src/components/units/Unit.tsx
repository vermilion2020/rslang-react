import { useContext } from "react";
import { UnitContext } from "../../context/UnitContext";
import { useWords } from "../../hooks/words";

interface UnitProps {
  unit: number,
  hard?: boolean
}

export function Unit({ unit }: UnitProps) {
  const { unit: currentUnit, page, setUnit } = useContext(UnitContext);
  const { fetchWords } = useWords(unit);

  const handleUnitUpdate = (unit: number) => {
    setUnit(unit);
    fetchWords(unit, page);
  }

  const className = unit === currentUnit ? `button unit-button current-unit` : `button unit-button`;
  return (
    <button className={className} onClick={() => {handleUnitUpdate(unit)}}>
      {unit === 6 ? 'сложное' : `раздел ${unit + 1}`}
      {unit === 6 ? <div className="lable-btn"></div> : ''}
    </button>
  );
}