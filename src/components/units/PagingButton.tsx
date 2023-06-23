import { useContext } from "react";
import { UnitContext } from "../../context/UnitContext";

interface PagingButtonProps {
  page: number
}

export function PagingButton({ page }: PagingButtonProps) {
  const { page: currentPage, setCurrentPage } = useContext(UnitContext);
  const handlePageSelect = (page: number) => {
    setCurrentPage(page);
    localStorage.setItem('page', `${page}`);
  }

  return (
    <div className='wrapper-btn-pag'>
      <button data-number={page}
        className={`button-pag ${page === currentPage && 'current-page'}`}
        onClick={() => handlePageSelect(page)}
      >
        {page}
      </button>
      <div className='icon-super'></div>
    </div>
  );
}