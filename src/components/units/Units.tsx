import { Unit } from "./Unit";

export function Units() {
  const unitNumbers = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="units">
      {
        unitNumbers.map(unit => <Unit key={unit} unit={unit}/>)
      }
    </div>
  );
}
