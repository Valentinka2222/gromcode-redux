import { LANGUAGE } from './language.actions';

export const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case LANGUAGE:
      return action.lang;
    default:
      return state;
  }
};
