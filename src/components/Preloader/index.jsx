import React from 'react';
import PropTypes from 'prop-types';

export const Preloader = ({ loading }) => <>{loading && <h3>Loading...</h3>}</>;

Preloader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
