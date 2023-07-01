import { useContext } from 'react';
import { UnitButton } from '../common/UnitButton';
import { SPRINT_START_TIME, UNITS } from '../../config-data';
import { TimerNode } from './TimerNode';
import { GameContext } from '../../context/GameContext';
import '../common/scss/UnitStyles.scss';

export function SprintSelectUnit () {
  const { unit } = useContext(GameContext);

  return (
    <div className="start-screen">
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
      { !!unit && <TimerNode secondsTotal={SPRINT_START_TIME} /> }
    </div> 
  );
}
