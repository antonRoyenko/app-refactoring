import React from 'react';
import PropTypes from 'prop-types';

export const DropDown = ({ label, options, input }) => (
  <label>
    {label}
    <select {...input}>
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

DropDown.defaultProps = {
  label: '',
  options: [],
};
