interface TranslateOptionProps {
  translate: string,
  index: number
}

export function TranslateOption({ translate, index }: TranslateOptionProps) {
  return (
    <button className="select-word button" >{ `${index} - ${translate}` }</button>
  );
}