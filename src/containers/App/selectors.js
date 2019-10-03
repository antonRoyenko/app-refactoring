import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable';

const selectRoot = state => state.root;

export const makeSelectGuests = createSelector(
  selectRoot,
  ({ guests }) => Object.values(Immutable.asMutable(guests)),
);

export const makeSelectLoading = createSelector(
  selectRoot,
  ({ loading }) => loading,
);

export const makeSelectMessage = createSelector(
  selectRoot,
  ({ message }) => message,
);
