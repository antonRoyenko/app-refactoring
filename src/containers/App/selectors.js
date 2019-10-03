import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable';
import { getFormValues } from 'redux-form';
import { INVITE_GUEST_FORM_NAME } from '../../components/InviteGuestForm/constants';

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

export const makeSelectFormValues = createSelector(
  getFormValues(INVITE_GUEST_FORM_NAME),
  values => values,
);
