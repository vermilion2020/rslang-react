import { useContext } from 'react';
import { UnitButton } from '../units/UnitButton';
import { GameContext } from '../../context/GameContext';
import { UNITS } from '../../config-data';
import { TimerNode } from './TimerNode';

export function SprintSelectUnit () {
  const { unit } = useContext(GameContext);


  return (
    <div className="start-sprint">
      <h2>Спринт</h2>
      <p>Правила игры:</p>
      <p>Выберите соответсвует ли перевод предложенному слову</p>
      <p>Используйте левую &#8592; и правую &#8594; стрелки  клавиатуры для выбора ответа</p>
      <p className="select-label">Выберите раздел:</p>
      { !unit && <div className="unit-select">
        {
          UNITS.map(u => <UnitButton unit={u} key={u}/>)
        }
      </div> }
      { !!unit && <TimerNode secondsTotal={3} /> }
    </div> 
  );
}
