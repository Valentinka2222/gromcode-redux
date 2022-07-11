export const TOOGLE_OPTION = 'OPTION/TOOGLE_OPTION';

export const toogleOptions = optionId => {
  return {
    type: TOOGLE_OPTION,
    payload: {
      optionId,
    },
  };
};
