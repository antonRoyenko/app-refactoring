import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const GuestList = ({ guests }) => (
  <div className="guests">
    {guests.map(guest => (
      <div
        key={guest.id}
        className={cn('guest', {
          'guest-coming': guest.isGoing,
        })}
      >
        &gt; &gt;<p>Name: {guest.name}</p>
        <p>Will attend: {guest.isGoing ? 'true' : 'false'}</p>
        <p>Favourite food: {guest.favouriteFood}</p>
      </div>
    ))}
  </div>
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
