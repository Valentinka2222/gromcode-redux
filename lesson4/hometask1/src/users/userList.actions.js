export const PREV_PAGE = 'PAGE/PREV_PAGE';
export const NEXT_PAGE = 'PAGE/NEXT_PAGE';

export const prevPage = page => {
  return {
    type: PREV_PAGE,
    page,
  };
};

export const nextPage = page => {
  return {
    type: NEXT_PAGE,
    page,
  };
};
