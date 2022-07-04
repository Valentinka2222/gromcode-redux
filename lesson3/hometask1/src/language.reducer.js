import { LANGUAGE } from './language.actions';

export const languageReducer = (state = '', action) => {
  switch (action.type) {
    case LANGUAGE:
      return {
        language: action.language,
      };

    default:
      return state;
  }
};
