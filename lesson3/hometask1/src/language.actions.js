export const LANGUAGE = 'UI/LANGUAGE';

export const setLanguage = lang => {
  return {
    type: LANGUAGE,
    language: lang,
  };
};
