import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { GuestList } from '../../components/GuestList';

import logo from './logo.svg';
import { InviteGuestForm } from '../../components/InviteGuestForm';
import { APP_ACTIONS } from './actions';
import { AppHeader, AppLogo, App as AppStyled } from './styles';
import { useAppData } from './useAppData';
import {
  makeSelectGuests,
  makeSelectLoading,
  makeSelectMessage,
} from './selectors';

const App = ({ submitForm, guests, loading, message }) => {
  const { initialValues } = useAppData();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      submitForm();
    },
    [submitForm],
  );

  return (
    <AppStyled>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
      </AppHeader>

      <h2>Invite Guest</h2>

      <InviteGuestForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        loading={loading}
        message={message}
      />

      <h2>Guests</h2>
      <GuestList guests={guests} />
    </AppStyled>
  );
};

const mapStateToProps = state => ({
  guests: makeSelectGuests(state),
  loading: makeSelectLoading(state),
  message: makeSelectMessage(state),
});

const mapDispatchToProps = {
  submitForm: APP_ACTIONS.TRIGGER,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
