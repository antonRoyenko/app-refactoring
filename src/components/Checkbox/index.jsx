import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({ label, input }) => (
  <label>
    {label}
    <input {...input} type="checkbox" />
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  label: '',
};
