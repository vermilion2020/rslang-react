import { createContext, useState } from 'react';
import { COUNT_PAGES, MAX_PAGE_NUMBER, MIN_PAGE_NUMBER } from '../config-data';

interface IUnitContext {
  page: number,
  pageNumbers: number[],
  unit: number,
  chapter: string,
  setCurrentPage: (page: number) => void,
  setUnit: (unit: number) => void,
  setChapter: (chapter: string) => void,
}

export const UnitContext = createContext<IUnitContext>({
  page: 0,
  pageNumbers: [0, 1, 2, 3, 4],
  unit: 0,
  chapter: 'main',
  setCurrentPage: () => {/**/},
  setUnit: () => {/**/},
  setChapter: () => {/**/},
});

const getPageNumbers = (page: number) => {
  let firstPage = page - 3;
  if (firstPage < MIN_PAGE_NUMBER)
  {
    firstPage = MIN_PAGE_NUMBER;
  } else if (firstPage + 5 > MAX_PAGE_NUMBER) {
    firstPage = MAX_PAGE_NUMBER - 4;
  }
  return Array
    .from(Array(COUNT_PAGES).keys())
    .map((num) => num + firstPage);
}

export const UnitState = ({ children }: { children: React.ReactNode }) => {
  const initPage = parseInt(localStorage.getItem('page') ?? '') || 0;
  const initUnit = parseInt(localStorage.getItem('unit') ?? '') || 0;
  const initChapter = window.location.pathname.replace('/', '');
  const [page, setPage] = useState(initPage);
  const [pageNumbers, setPageNumbers] = useState(getPageNumbers(page));
  const [unit, setUnit] = useState(initUnit);
  const [chapter, setChapter] = useState(initChapter);

  const setCurrentPage = (page: number) => {
    if (page > MAX_PAGE_NUMBER || page < MIN_PAGE_NUMBER) {
      return;
    }
    setPage(page);
    setPageNumbers(getPageNumbers(page));
  }

  return (
    <UnitContext.Provider value={{ page, unit, chapter, pageNumbers, setUnit, setChapter, setCurrentPage }}>
      { children }
    </UnitContext.Provider>
  );
}