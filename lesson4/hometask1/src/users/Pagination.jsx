import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  let isNextPageAvailable = '→';
  let isPrevPageAvailable = '←';

  if (currentPage === 0) {
    isPrevPageAvailable = null;
  }
  if (totalItems % itemsPerPage === 1 || totalItems < itemsPerPage) {
    isNextPageAvailable = null;
  }

  return (
    <div className="pagination">
      <button
        className="btn"
        onClick={goPrev}
        disabled={isPrevPageAvailable === null ? true : false}
      >
        {isPrevPageAvailable}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button
        className="btn"
        onClick={goNext}
        disabled={isNextPageAvailable === null ? true : false}
      >
        {isNextPageAvailable}
      </button>
    </div>
  );
};

export default Pagination;
