import { useState } from 'react';
import './Sprint.scss';
import { UnitButton } from '../units/UnitButton';

export function SprintSelectUnit () {
  const [unit, setUnit] = useState(0);
  const units = [1, 2, 3, 4, 5, 6];

  const containerClass = unit ? `sprint-container unit-${unit}-container` : 'sprint-container';
  return (
    <div className={containerClass}>
      <div className="start-sprint" data-id="${unitId || 1}">
        <h2>Спринт</h2>
        <p>Правила игры:</p>
        <p>Выберите соответсвует ли перевод предложенному слову</p>
        <p>Используйте левую &#8592; и правую &#8594; стрелки  клавиатуры для выбора ответа</p>
        <p className="select-label">Выберите раздел:</p>
        <div className="unit-select">
          {
            units.map(u => <UnitButton unit={u} key={u} setUnit={setUnit}/>)
          }
        </div>
      </div>
    </div>
  );
}
