import { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { GameWordData } from "../../models";
import { TimerNode } from "./TimerNode";
import { API_BASE_URL, CORRECT_AUDIO, INCORRECT_AUDIO } from "../../config-data";

interface GameCardProps {
  word: GameWordData
}

function randomResult(word: GameWordData) {
  const correct = Math.round(Math.random());
  let translate = '';
  translate = correct ? word.wordTranslate : word.translates[0];
  return { correct, translate };
}

export function GameCard({ word }: GameCardProps) {
  const { 
    unit,
    setCurrentWordIndex,
    setCheckedWords,
    checkedWords,
    setMaxSuccess,
    setSuccessInRope,
    maxSuccess,
    successInRope,
    currentWordIndex,
    totalScore,
    setTotalScore,
    audioRef
  } = useContext(GameContext);
  const [selected, setSelected] = useState(false);
  const [ score, setScore ] = useState(10);
  const [result, setResult] = useState(false);
  const { correct, translate } = randomResult(word);

  const handleChoice = (choice: boolean) => {
    setSelected(true);
    const audio = audioRef as React.MutableRefObject<HTMLAudioElement>;
    audio.current.src = result ?
      `${API_BASE_URL}/${CORRECT_AUDIO}` :
      `${API_BASE_URL}/${INCORRECT_AUDIO}`;
    audio.current.play();

    const checkedWord = {
      wordId: word.id,
      word: word.word,
      wordTranslate: word.wordTranslate,
      transcription: word.transcription,
      audio: word.audio,
      result: choice === !!correct
    };

    if (choice === !!correct) {
      setResult(true);
      setSuccessInRope(successInRope + 1);
      setTotalScore(totalScore + score);
      setScore(Math.ceil(successInRope / 3) * 10 || 10);
      if (successInRope > maxSuccess) {
        setMaxSuccess(successInRope);
      }
    } else {
      setScore(10);
      setResult(false);
      setSuccessInRope(0);
    }
    
    setCheckedWords([...checkedWords, checkedWord]);
    setCurrentWordIndex(currentWordIndex + 1);
    setSelected(false);
  }

  const cardClassName = 
    selected && result ? 'background-true card-inner' :
    selected && !result ?'background-false card-inner' : 'start-sprint';

  return (
    <div className={cardClassName}>
      <p id="score">{totalScore}</p>
      <p className="success-count">+<span id="success-count">{score}</span> очков за правильный ответ</p>
      <div className="point-multiplier">
        <div className="circle" data-value="1"></div>
        <div className="circle" data-value="2"></div>
        <div className="circle" data-value="3"></div>
      </div>
      <div className={`unit-img unit-${unit}-img`}></div>
      <h3 id="card-word" className="card-word">{word.word}</h3>
      <h4 id="card-translate" className="card-translate">{translate}</h4>
      <div className="decision">
        <button
          className="decision_button decision_button__false"
          onClick={() => {handleChoice(false)}}
          disabled={selected}
        >Неверно</button>
        <button
          className="decision_button decision_button__true"
          onClick={() => {handleChoice(true)}}
          disabled={selected}
        >Верно</button>
      </div>
      { <div className="margin-top-80"><TimerNode secondsTotal={20} /></div> }
    </div>
  );
}