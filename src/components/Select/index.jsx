import React from 'react';
import PropTypes from 'prop-types';

export const DropDown = ({ label, value, onChange, name, options }) => (
  <label>
    {label}
    <select name={name} value={value} onChange={onChange}>
      {options.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  </label>
);

DropDown.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

DropDown.defaultProps = {
  label: '',
  value: '',
  options: [],
};
