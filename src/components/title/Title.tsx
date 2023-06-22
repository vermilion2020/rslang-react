interface TitleProps {
  titleName: string
}

export function Title({ titleName }: TitleProps) {
  return (
  <p className="title-sec">{titleName}</p>
  );
}
