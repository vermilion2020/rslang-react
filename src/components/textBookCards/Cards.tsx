import { IWordData } from "../../models";
import { Card } from "./Card";

interface CardsProps {
  words: IWordData[]
}

export function Cards({ words }: CardsProps) {
  return (
    <>
      <div className="main-page">
        <div className="cards-container">
          {
            words.map(word => <Card key={word.id} wordData={word} />)
          }
        </div>
      </div>
    </>

  );
}