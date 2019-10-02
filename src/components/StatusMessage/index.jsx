import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const StatusMessage = ({ message }) => (
  <h3
    className={cn('status', {
      'status-in': message,
    })}
  >
    Status: {message}
  </h3>
);

StatusMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
