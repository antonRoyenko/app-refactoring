import Immutable from 'seamless-immutable';

import { makeGuest } from '../../utils/utils';
import { SIMPLE_ACTION } from './actions';

export const simpleAction = values => dispatch => {
  dispatch({
    type: SIMPLE_ACTION.TRIGGER,
    payload: values,
  });

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  delay(100).then(() => {
    if (Math.random() < 0.5) {
      dispatch({
        type: SIMPLE_ACTION.SUCCESS,
        payload: makeGuest(values.name, values.isGoing, values.food),
      });
    } else {
      dispatch({
        type: SIMPLE_ACTION.FAILURE,
        payload: values.name,
      });
    }
  });
};

const initialState = {
  guests: {
    1: {
      id: 1,
      name: 'Bob',
      isGoing: true,
      favouriteFood: 'Pizza',
    },
    2: {
      id: 2,
      name: 'Lara',
      isGoing: false,
      favouriteFood: 'Mango',
    },
  },
  loading: false,
  message: '',
};

const appReducer = (state = Immutable(initialState), { type, payload }) => {
  switch (type) {
    case SIMPLE_ACTION.TRIGGER:
      return Immutable.merge(state, { loading: true, message: '' });
    case SIMPLE_ACTION.FAILURE:
      return Immutable.merge(state, {
        loading: false,
        message: `Failed to invite guest ${payload}`,
      });
    case SIMPLE_ACTION.SUCCESS:
      return Immutable.merge(state, {
        guests: {
          ...state.guests,
          [payload.id]: payload,
        },
        loading: false,
        message: `Successfully invited guest ${payload.name}`,
      });
    default:
      return state;
  }
};

export default appReducer;
