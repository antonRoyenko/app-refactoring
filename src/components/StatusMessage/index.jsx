import React from 'react';
import PropTypes from 'prop-types';
import { Status } from './styles';

export const StatusMessage = ({ message }) => (
  <Status message={message}>Status: {message}</Status>
);

StatusMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
