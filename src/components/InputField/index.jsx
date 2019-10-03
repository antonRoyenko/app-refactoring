import React from 'react';
import PropTypes from 'prop-types';

export const InputField = ({ label, input }) => (
  <label>
    {label}
    <input {...input} type="input" />
  </label>
);

InputField.propTypes = {
  label: PropTypes.string,
};

InputField.defaultProps = {
  label: '',
};
