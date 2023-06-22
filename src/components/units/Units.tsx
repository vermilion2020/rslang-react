import { Unit } from "./Unit";

export function Units() {
  const unitNames = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="units">
      {
        unitNames.map(unit => <Unit key={unit} unit={unit}/>)
      }
    </div>
  );
}
