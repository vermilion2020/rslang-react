import { useContext, useState } from 'react';
import './Sprint.scss';
import { UnitButton } from '../units/UnitButton';
import { TimerNode } from './TimerNode';
import './Sprint.scss';
import { GameContext } from '../../context/GameContext';

export function SprintSelectUnit () {
  const units = [1, 2, 3, 4, 5, 6];
  const { setUnit, unit } = useContext(GameContext);
  const handleSetUnit = (unit: number) => {
    setUnit(unit);
  }


  return (
      <div className="start-sprint">
        <h2>Спринт</h2>
        <p>Правила игры:</p>
        <p>Выберите соответсвует ли перевод предложенному слову</p>
        <p>Используйте левую &#8592; и правую &#8594; стрелки  клавиатуры для выбора ответа</p>
        <p className="select-label">Выберите раздел:</p>
        { !unit && <div className="unit-select">
          {
            units.map(u => <UnitButton unit={u} key={u}/>)
          }
        </div> }
        { !!unit && <TimerNode secondsTotal={3} /> }
      </div>
  );
}
