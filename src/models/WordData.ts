export interface IWordData {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
  _id?: string;

  difficulty?: string;
  optional?: {
    vic: number;
    loss: number;
  };
  used?: boolean;
}

export interface CheckedWord {
  wordId: string;
  word: string;
  wordTranslate: string;
  transcription: string;
  audio: string;
  result: boolean;
  difficulty?: '' | 'hard' | 'easy';
  vic?: number;
  loss?: number;
}

export type GameWordData = IWordData & { translates: string[] };