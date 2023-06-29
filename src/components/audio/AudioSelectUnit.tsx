import { useContext } from 'react';
import './AudioChallenge.scss';
import { UnitButton } from '../units/UnitButton';
import { GameContext } from '../../context/GameContext';
import { UNITS } from '../../config-data';
import { GamePhase } from '../../models';

export function AudioSelectUnit () {
  const { unit, setPhase } = useContext(GameContext);
  const handleStartGame = () => {
    setPhase(GamePhase.play);
  }

  const containerClass = unit ? `main-page-audio unit-${unit}-container` : 'main-page-audio';
  return (
    <div className={containerClass}>
      <div className="wrapper">
        <section className="content">
          <div className="audio-content__wrapper">
            <h2 className="audio-main__title">Аудиовызов</h2>
            <h4 className="audio-main__subtitle">Тренировка Аудиовызов улучшает Ваше восприятие речи на слух</h4>
            <ul className="control-explanation">
              <li className="control-explanation__item">Используйте цифровые клавиши от 1 до 5</li>
              <li className="control-explanation__item">Используйте enter - чтобы пропустить вопрос</li>
            </ul>
            <p className="select-unit-offer">Выберите раздел:</p>
            <div className="select-container">
              {
                UNITS.map(u => <UnitButton unit={u} key={u} />)
              }
            </div>
            <div className="block-btn__start">
            <button
              className="btn-start"
              disabled={!unit ? true : false}
              onClick={handleStartGame}
            >Начать</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
