import { createSelector } from 'reselect';

export const optionsListSelector = state => {
  return Object.values(state.options.optionsList);
};
export const selectedIdstSelector = state => {
  return state.options.selected;
};
export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdstSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => selectedIds.includes(option.id));
  },
);
export const availableOptionSelector = createSelector(
  [optionsListSelector, selectedIdstSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => !selectedIds.includes(option.id));
  },
);
