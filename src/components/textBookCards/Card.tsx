import { IWordData } from "../../models";

interface CardProps {
  wordData: IWordData
}

export function Card({ wordData }: CardProps) {
  const { word, wordTranslate, optional } = wordData;
  const playClass = optional && +optional.loss ? ' play' : '';
  return (
    <>
      <div className="textbook-card" id="${wordData.id}">
        <div className="wordEn">{word}</div>
        <div className="wordRu">{wordTranslate}</div>
        <div className="wrapper-difficulty">
          <div className={`difficulty vic${playClass}`}>{ optional?.vic }</div>
          <div className={`difficulty loss${playClass}`}>{optional?.loss}</div>
        </div>
        <div className={`label ${wordData.difficulty ? wordData.difficulty : ''}`}></div>
      </div>
    </>
  );
}