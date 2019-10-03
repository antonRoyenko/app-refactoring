import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { GuestList } from '../../components/GuestList';

import logo from './logo.svg';
import { InviteGuestForm } from '../../components/InviteGuestForm';
import { APP_ACTIONS } from './actions';
import { AppHeader, AppLogo, App as AppStyled } from './styles';
import { useAppData } from './useAppData';

const App = () => {
  const dispatch = useDispatch();
  const { loading, guests, message, initialValues } = useAppData();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(APP_ACTIONS.TRIGGER());
    },
    [dispatch],
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

export default App;
