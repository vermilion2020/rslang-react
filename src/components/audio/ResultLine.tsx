import { useContext } from "react";
import { CheckedWord } from "../../models";
import { GameContext } from "../../context/GameContext";
import { API_BASE_URL } from "../../config-data";

interface ResultLineProps {
  word: CheckedWord
}

export function ResultLine({ word }: ResultLineProps) {
  const { audioRef } = useContext(GameContext);
  const { word: currentWord, transcription, wordTranslate} = word;
  const handlePlay = () => {
    const audio = audioRef as React.MutableRefObject<HTMLAudioElement>;
    audio.current.src = `${API_BASE_URL}/${word.audio}`;
    audio.current.play();
  }

  return (
    <div className="results-line">
    <svg className="results-audio">
      <use className="results-audio" onClick={handlePlay} xlinkHref="./icons/audio.svg#audio-inner"></use>
    </svg>
    <div className="word">{currentWord}</div>
    <div className="transcription">{transcription}</div> - 
    <div className="translate">{wordTranslate}</div>
  </div>
  );
}