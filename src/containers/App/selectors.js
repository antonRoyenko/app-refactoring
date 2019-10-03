import Immutable from 'seamless-immutable';
import { getFormValues } from 'redux-form';
import { INVITE_GUEST_FORM_NAME } from '../../components/InviteGuestForm/constants';

export const makeSelectGuests = ({ root: { guests } }) =>
  Object.values(Immutable.asMutable(guests));

export const makeSelectLoading = ({ root: { loading } }) => loading;

export const makeSelectMessage = ({ root: { message } }) => message;

export const makeSelectFormValues = getFormValues(INVITE_GUEST_FORM_NAME);
