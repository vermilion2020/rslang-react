import { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { GameWordData } from "../../models";
import { TimerNode } from "./TimerNode";
import { API_BASE_URL, CORRECT_AUDIO, INCORRECT_AUDIO, SPRINT_GAME_TIME } from "../../config-data";
import { useGameWords } from "../../hooks/gameWords";

interface GameCardProps {
  word: GameWordData
}

export function GameCard({ word }: GameCardProps) {
  const { 
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
    unit,
    page,
    correct,
    translates,
    audioRef
  } = useContext(GameContext);
  const [score, setScore] = useState(10);
  const [result, setResult] = useState(false);
  const { gameWords, fetchGameWords, randomResult } = useGameWords(unit, page);

  const handleChoice = (choice: boolean) => {
    const audio = audioRef as React.MutableRefObject<HTMLAudioElement>;
    audio.current.src = choice === !!correct ?
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
      setScore(Math.ceil((successInRope + 2) / 4) * 10 || 10);
      if (successInRope > maxSuccess) {
        setMaxSuccess(successInRope);
      }
    } else {
      setScore(10);
      setResult(false);
      setSuccessInRope(0);
    }

    setCheckedWords([...checkedWords, checkedWord]);
    if (currentWordIndex === gameWords.length - 3) {
        let newPage = page;
        let newUnit = unit;
        if (page > 0 && unit > 0) {
          newPage = page - 1;
        } else if (unit > 0) {
          newPage = 29;
          newUnit = unit - 1;
        } else {
          return;
        }
        fetchGameWords(newUnit, newPage);
    }
    const index = currentWordIndex + 1;
    setCurrentWordIndex(index);
    randomResult(gameWords[index]);
  }

  const cardClassName = 
    result === true && totalScore ? 'background-true play-screen' :
    result === false && totalScore ?'background-false play-screen' : 
    'play-screen';

  return (
    <div className={cardClassName}>
      <p id="score">{totalScore}</p>
      <p className="success-count">+<span id="success-count">{score}</span> очков за правильный ответ</p>
      <div className="point-multiplier">
        <div 
          className={ successInRope % 4 > 0 ? `circle-${unit}__active circle` : 'circle'}
        ></div>
        <div
          className={ successInRope % 4 > 1 ? `circle-${unit}__active circle` : 'circle'}
        ></div>
        <div
          className={ successInRope % 4 > 2 ? `circle-${unit}__active circle` : 'circle'}
        ></div>
      </div>
      <div className={`unit-img unit-${unit}-img`}></div>
      <h3 id="card-word" className="card-word">{word.word}</h3>
      <h4 id="card-translate" className="card-translate">{translates[0]}</h4>
      <div className="decision">
        <button
          className="decision_button decision_button__false"
          onClick={() => {handleChoice(false)}}
        >Неверно</button>
        <button
          className="decision_button decision_button__true"
          onClick={() => {handleChoice(true)}}
        >Верно</button>
      </div>
      { <div className="margin-top-80"><TimerNode secondsTotal={SPRINT_GAME_TIME} /></div> }
    </div>
  );
}