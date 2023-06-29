import { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { GameWordData } from "../../models";
import { API_BASE_URL, CORRECT_AUDIO, COUNT_AUDIO_OPTIONS, INCORRECT_AUDIO } from "../../config-data";
import { useGameWords } from "../../hooks/gameWords";
import { CrossBtn } from "./CrossBtn";
import { TranslateOption } from "./TranslateOption";

interface GameCardProps {
  word: GameWordData
}

function randomTranslates(word: GameWordData) {
  const correct = Math.floor(Math.random() * COUNT_AUDIO_OPTIONS);
  const translates = [...word.translates];
  translates.splice(correct, 0, word.wordTranslate);
  return { correct, translates };
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
    audioRef
  } = useContext(GameContext);
  const [score, setScore] = useState(10);
  const [result, setResult] = useState(false);
  const { correct, translates } = randomTranslates(word);
  const { gameWords, page, fetchGameWords } = useGameWords();

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
    setCurrentWordIndex(currentWordIndex + 1);
  }

  return (
    <> 
      <div className="wrapper">
        <section className="content">
            <div className="game-wrapper">
              <div className="visualisation">
                <div className="voice-ico__block">
                  <img src={`${API_BASE_URL}/${word.image}`} alt={word.word} className="hidden word-picture" />
                </div>
                <div className="repeat-word">
                <div className="speaker-ico hidden"><img className="img-voice" src="images/png/up_volume.png" alt="img voice" /></div>
                <p className="select-offer"></p>
              </div>
            </div>
            <div className="select-container__game">
              { translates.map((t, index) => <TranslateOption translate={t} index={index} key={`${word.id}_${index}`}/>) }
            </div>
            <div className="block-btn__next">
              <button className="btn-dont-know">Пропустить</button>
              <button className="btn-next hidden button">Следующее слово</button>
            </div>
          </div>
        </section>
      </div>
      <CrossBtn />
    </>
  );
}