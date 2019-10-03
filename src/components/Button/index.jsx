import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children }) => (
  <button type="submit">{children}</button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
