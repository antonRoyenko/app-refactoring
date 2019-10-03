import React from 'react';
import PropTypes from 'prop-types';
import { GuestItem, Guests } from './styles';

export const GuestList = ({ guests }) => (
  <Guests>
    {guests.map(guest => (
      <GuestItem key={guest.id} isGoing={guest.isGoing}>
        &gt; &gt;<p>Name: {guest.name}</p>
        <p>Will attend: {guest.isGoing ? 'true' : 'false'}</p>
        <p>Favourite food: {guest.favouriteFood}</p>
      </GuestItem>
    ))}
  </Guests>
);

GuestList.propTypes = {
  guests: PropTypes.arrayOf(
    PropTypes.shape({
      favouriteFood: PropTypes.string,
      id: PropTypes.number,
      isGoing: PropTypes.bool,
      name: PropTypes.string,
    }),
  ),
};

GuestList.defaultProps = {
  guests: [],
};
