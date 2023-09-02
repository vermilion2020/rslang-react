import { useContext } from 'react';
import { UnitContext } from "../../context/UnitContext";
import { useGetWordsQuery } from "../../store/words.api";
import { ErrorMessage } from "../ErrorMessage";
import { Loader } from "../Loader";
import { Card } from "./Card";

export function Cards() {
  const { unit, page } = useContext(UnitContext);
  const { isLoading, isError, error, data } = useGetWordsQuery({group: unit, page: page});
  return (
    <>
      <div className="main-page">
        { isLoading && <Loader /> }
        { isError && <ErrorMessage error={'error' in error ? error.error : ''} /> }
        {
          !isLoading && !isError && 
          <div className="cards-container">
            {
              data?.map(word => <Card key={word.id} wordData={word} />)
            }
          </div>
        }
      </div>
    </>

  );
}