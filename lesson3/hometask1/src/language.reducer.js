import { LANGUAGE } from './language.actions';

export const languageReducer = (state = '', action) => {
  switch (action.type) {
    case LANGUAGE:
      return {
        ...state,
        language: action.language,
      };

    default:
      return state;
  }
};
