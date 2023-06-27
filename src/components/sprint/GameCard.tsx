interface GameCardProps {
  word: string,
  translate: string
}

export function GameCard({ word, translate }: GameCardProps) {
  return (
    <div className="sprint-container unit-${unit}-container">
      <div className="card-sprint" id="card-sprint" data-word="${word.id}" data-result="${result}">
        <p id="score">0</p>
        <p className="success-count">+<span id="success-count">10</span> очков за правильный ответ</p>
        <div className="point-multiplier">
          <div className="circle" data-value="1"></div>
          <div className="circle" data-value="2"></div>
          <div className="circle" data-value="3"></div>
        </div>
        <div className="unit-img unit-${unit}-img"></div>
        <h3 id="card-word" className="card-word">${word}</h3>
        <h4 id="card-translate" className="card-translate">${translate}</h4>
        <div className="decision">
          <button className="decision_button decision_button__false" data-value="0">Неверно</button>
          <button className="decision_button decision_button__true" data-value="1">Верно</button>
        </div>
      </div>
    
    </div>
  );
}