import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({ label, name, checked, onChange }) => (
  <label>
    {label}
    <input name={name} type="checkbox" checked={checked} onChange={onChange} />
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  label: '',
};
