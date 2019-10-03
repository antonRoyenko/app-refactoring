import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GuestList } from '../../components/GuestList';

import logo from './logo.svg';
import '../../App.css';
import { InviteGuestForm } from '../../components/InviteGuestForm';
import { APP_ACTIONS } from './actions';
import { useAppData } from './useAppData';

const App = () => {
  const dispatch = useDispatch();
  const { loading, guests, message } = useAppData();

  const [name, setName] = useState('Bob');
  const [food] = useState('Pizza');
  const [isGoing] = useState(true);

  const handleInputChange = useCallback(e => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { nameValue } = target;

    setName({ [nameValue]: value });
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      dispatch(APP_ACTIONS.TRIGGER({ name, isGoing, food }));
    },
    [dispatch, food, isGoing, name],
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <h2>Invite Guest</h2>

      <InviteGuestForm
        handleSubmit={handleSubmit}
        nameValue={name}
        handleInputChange={handleInputChange}
        foodValue={food}
        isGoing={isGoing}
        loading={loading}
        message={message}
      />

      <h2>Guests</h2>
      <GuestList guests={guests} />
    </div>
  );
};

export default App;
