import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { ResultLine } from "./ResultLine";
import { GamePhase } from "../../models/Games";
import './scss/GameResults.scss';

export function GameResults() {
  const { 
    checkedWords,
    totalScore,
    setTotalScore,
    setPhase,
    setCheckedWords,
    setCurrentWordIndex,
    setMaxSuccess,
    setSuccessInRope
  } = useContext(GameContext);

  const handleTryAgain = () => {
    setTotalScore(0);
    setCheckedWords([]);
    setCurrentWordIndex(0);
    setMaxSuccess(0);
    setSuccessInRope(0);
    setPhase(GamePhase.play);
  }

  const successWords = checkedWords.filter(w => w.result === true);
  const failedWords = checkedWords.filter(w => w.result === false);

  return (
      <div className="results-sprint" id="results-sprint">
        <h2 className="heading-h1">Результаты игры</h2>
        <h3 className="heading-h3">Вы набрали {totalScore} очков</h3>
        <hr />
        <div className="result-scroll">
          <h3 className="heading-h3">Угадано слов: <span className="results-success">{successWords.length}</span></h3>
          <div className="success-words">
            { successWords.map((w, index) => <ResultLine word={w} key={`${w.word}_${index}`} />) }
          </div>
          <hr />
          <h3 className="heading-h3">Не угадано слов: <span className="results-fail">{failedWords.length}</span></h3>
          <div className="failed-words">
            { failedWords.map((w, index) => <ResultLine word={w} key={`${w.word}_${index}`} />) }
          </div>
        </div>
        <hr />
        <button className="play-again button" onClick={handleTryAgain}>Попробовать еще раз</button>
      </div>
  );
}