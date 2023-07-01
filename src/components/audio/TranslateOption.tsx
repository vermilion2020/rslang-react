import { Dispatch, SetStateAction } from "react";
import { GameWordData } from "../../models";

interface TranslateOptionProps {
  translate: string,
  index: number,
  selected: boolean,
  choice: number,
  correct: number,
  handleChoice: (selected: number) => void
}

export function TranslateOption({ translate, index, selected, choice, correct, handleChoice }: TranslateOptionProps) {
  const extraClass = index === correct ? ' correct' :
    selected && index === choice && choice !== correct ? ' incorrect' : '';
  const optionClass = `select-word button${extraClass}`;

  return (
    <button
      className={optionClass}
      onClick={() => {handleChoice(index)}}
      disabled={selected}
    >{ `${index} - ${translate}` }</button>
  );
}