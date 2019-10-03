import React from 'react';
import { Field as ReduxField } from 'redux-form';

export const Field = ({ Component, ...props }) => (
  <ReduxField component={Component} {...props} />
);
