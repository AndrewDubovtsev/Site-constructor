import { createSelector } from 'reselect';

const selectTexts = (state) => state.texts;

export const selectTextsList = createSelector(
  [selectTexts],
  (texts) => texts
);
