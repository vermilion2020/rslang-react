/* eslint-disable no-constant-condition */
import { useContext } from "react";
import { UnitContext } from "../../context/UnitContext";
import { PagingButton } from "./PagingButton";
import { Link } from "react-router-dom";
import { MAX_PAGE_NUMBER, MIN_PAGE_NUMBER } from "../../config-data";

export function Paging() {
  const { page: currentPage, chapter, setChapter, pageNumbers, setCurrentPage } = useContext(UnitContext);
  const btnText = chapter === 'dictionary' ? 'В учебник'
    : chapter === 'textbook' ? 'В словарь' : '';
  const btnLink = chapter === 'dictionary' ? 'textbook' 
    : chapter === 'textbook' ? 'dictionary' : '';

  return (
    <div className="wrapper-paging">
      <div className="paging">
        <button 
          className='paging__double-prev button-pag'
          disabled={currentPage <= MIN_PAGE_NUMBER ? true : false}
          onClick={() => setCurrentPage(0)}
        ></button>
        <button
          className='paging__prev button-pag'
          disabled={currentPage <= MIN_PAGE_NUMBER ? true : false}
          onClick={() => setCurrentPage(currentPage - 1)}
        ></button>
        {
          pageNumbers.map(page => <PagingButton page={page} key={page}/>)
        }
        <button 
          className='paging__next button-pag'
          disabled={currentPage >= MAX_PAGE_NUMBER ? true : false}
          onClick={() => setCurrentPage(currentPage + 1)}
        ></button>
        <button 
          className='paging__double-next button-pag'
          disabled={currentPage >= MAX_PAGE_NUMBER ? true : false}
          onClick={() => setCurrentPage(29)}
        ></button>
      </div>
      <Link to={`/${btnLink}`} onClick={() => setChapter(btnLink)}>
        <button className="btn-to-menu">{btnText}</button>
      </Link>
    </div>
  );
}
