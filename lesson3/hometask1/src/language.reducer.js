import { LANGUAGE } from './language.actions';

const initialState = {
  language: '',
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE:
      return {
        language: action.language,
      };

    default:
      return state;
  }
};
