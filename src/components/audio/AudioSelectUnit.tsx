import { useState } from 'react';
import './AudioChallenge.scss';
import { UnitButton } from '../units/UnitButton';

export function AudioSelectUnit () {
  const [unit, setUnit] = useState(0);
  const units = [1, 2, 3, 4, 5, 6];

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
                units.map(u => <UnitButton unit={u} key={u} setUnit={setUnit}/>)
              }
            </div>
            <div className="block-btn__start">
            <button
              className="btn-start"
              disabled={!unit ? true : false}
            >Начать</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
