import { createSelector } from 'reselect';

const selectRoot = state => state.root;

export const makeSelectGuests = createSelector(
  selectRoot,
  ({ guests }) => guests,
);

export const makeSelectLoading = createSelector(
  selectRoot,
  ({ loading }) => loading,
);

export const makeSelectMessage = createSelector(
  selectRoot,
  ({ message }) => message,
);
