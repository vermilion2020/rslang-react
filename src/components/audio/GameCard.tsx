import { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
import { GameWordData } from "../../models";
import { API_BASE_URL, CORRECT_AUDIO, INCORRECT_AUDIO } from "../../config-data";
import { useGameWords } from "../../hooks/gameWords";
import { CrossBtn } from "./CrossBtn";
import { TranslateOption } from "./TranslateOption";

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
    translates,
    correct,
    audioRef
  } = useContext(GameContext);
  const [score, setScore] = useState(10);
  const [selected, setSelected] = useState(false);
  const [choice, setChoice] = useState(0); 
  const { gameWords, page, fetchGameWords, randomTranslates } = useGameWords(4);

  const playAudio = () => {
    const audio = audioRef as React.MutableRefObject<HTMLAudioElement>;
    audio.current.src = `${API_BASE_URL}/${word.audio}`;
    audio.current.play();
  }

  const handleChoice = (index: number) => {
    const audio = audioRef as React.MutableRefObject<HTMLAudioElement>;
    audio.current.src = index === correct ?
      `${API_BASE_URL}/${CORRECT_AUDIO}` :
      `${API_BASE_URL}/${INCORRECT_AUDIO}`;
    audio.current.play();
    setSelected(true);
    setChoice(index);

    const checkedWord = {
      wordId: word.id,
      word: word.word,
      wordTranslate: word.wordTranslate,
      transcription: word.transcription,
      audio: word.audio,
      result: index === correct
    };

    if (index === correct) {
      setSuccessInRope(successInRope + 1);
      setTotalScore(totalScore + score);
      setScore(Math.ceil((successInRope + 2) / 4) * 10 || 10);
      if (successInRope > maxSuccess) {
        setMaxSuccess(successInRope);
      }
    } else {
      setScore(10);
      setSuccessInRope(0);
    }

    setCheckedWords([...checkedWords, checkedWord]);
  }

  const handleNext = () => {
    setSelected(false);
    setChoice(10);
    const index = currentWordIndex + 1;
    setCurrentWordIndex(index);
    randomTranslates(gameWords[index]);
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
  }

  return (
    <> 
      <div className="play-screen audio-card">
        <section className="content">
            <div className="game-wrapper">
              <div className="visualisation">
                <div className="voice-ico__block" onClick={playAudio}>
                { selected && 
                  <img src={`${API_BASE_URL}/${word.image}`} alt={word.word} className="word-picture" /> }
                </div>
                <div className="repeat-word">
                { selected && 
                  <div className="speaker-ico" onClick={playAudio}>
                    <img className="img-voice" src="images/png/up_volume.png" alt="img voice" />
                  </div> }
                { selected && <p className="select-offer">{word.word}</p> }
              </div>
            </div>
            <div className="select-container__game">
              { translates.map((t, index) =>
                <TranslateOption
                  translate={t}
                  index={index}
                  key={`${word.id}_${index}`}
                  selected={selected}
                  choice={choice}
                  correct={correct}
                  handleChoice={handleChoice}
                />) }
            </div>
            <div className="block-btn__next">
              { !selected && <button className="btn-dont-know" onClick={() => {handleChoice(10)}}>Пропустить</button> }
              { selected && <button className="btn-next" onClick={handleNext}>Следующее слово</button> }
            </div>
          </div>
        </section>
      </div>
      <CrossBtn />
    </>
  );
}
