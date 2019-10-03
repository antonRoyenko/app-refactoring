import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ name, label, value, onChange }) => (
  <label>
    {label}
    <input name={name} type="Input" value={value} onChange={onChange} />
  </label>
);

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  label: '',
  value: '',
};
