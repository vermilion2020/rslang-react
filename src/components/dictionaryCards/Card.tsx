import { API_BASE_URL } from "../../config-data";
import { IWordData } from "../../models";

interface CardProps {
  wordData: IWordData
}

export function Card({ wordData }: CardProps) {
  const {
    id,
    word,
    wordTranslate,
    optional,
    textMeaningTranslate,
    textExampleTranslate,
    textMeaning,
    textExample,
    difficulty,
    audio,
    audioExample,
    audioMeaning,
    image
  } = wordData;
  const playClass = optional && +optional.loss ? ' play' : '';
  return (
    <div className="dictionary-card" id={id}>
      <div className="diction-meta">
        <img className="diction-meta-photo" src={`${API_BASE_URL}/${image}`} />
      </div>

      <div className="diction-desc">
        
        <div className="block-en">
          <div className="wordEn">{word}</div>
          <div className="text-meaning" dangerouslySetInnerHTML={{__html: textMeaning}}></div>
          <div className="text-example" dangerouslySetInnerHTML={{__html: textExample}}></div>
        </div>

        <div className="block-ru">
          <div className="wordRu">{wordTranslate}</div>
          <div className="text-meaning-trn">{textMeaningTranslate}</div>
          <div className="text-example-trn">{textExampleTranslate}</div>
        </div>
        <div className={`label ${wordData.difficulty ? wordData.difficulty : ''}`}></div>
        <div className="sec-btn-diction">
          <div className="wrapper-btn-diction">
            <input type="hidden" id={`difficulty_${id}`} value={difficulty} />
              <div className="difficulty-block">
                <button data-value="hard" 
                  data-id={id} 
                  data-icon={`hard_${id}`}
                  className={`difficulty-button hard-icon ${wordData.difficulty === 'hard' ? ' active' : ''}`}>
                сложное</button><br />
              </div>
              <div className="difficulty-block">
                <button data-value="easy" 
                  data-id={id}
                  data-icon="easy_${wordData.id}"
                  className={`difficulty-button easy-icon ${wordData.difficulty === 'easy' ? ' active' : ''}`}>
                изученное</button><br />
              </div>
          </div>
          <div className="wrapper-difficulty">
            <div className={`difficulty vic${playClass}`}>{ optional?.vic }</div>
            <div className={`difficulty loss${playClass}`}>{ optional?.loss }</div>
          </div>
        </div>
      
        <div className="btn-audio-wrapper">
          <button className="btn-audio-diction" 
            data-audio={audio}
            data-audioMeaning={audioMeaning}
            data-audioExample={audioExample}
          >
            <div className="icon-audio-diction"> </div>
          </button>
        </div>
      </div> 
    </div>
  );
}
