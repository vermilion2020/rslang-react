import { useWords } from "../../hooks/words";
import { ErrorMessage } from "../ErrorMessage";
import { Loader } from "../Loader";
import { Card } from "./Card";

export function Cards() {
  const { words, loading, error } = useWords();
  return (
    <>
      <div className="main-page">
        { loading && <Loader /> }
        { error && <ErrorMessage error={error} /> }
        {
          !loading && !error && 
          <div className="cards-container">
            {
              words.map(word => <Card key={word.id} wordData={word} />)
            }
          </div>
        }
        
      </div>
    </>

  );
}