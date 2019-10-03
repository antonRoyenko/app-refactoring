import Immutable from 'seamless-immutable';

import { SIMPLE_ACTION } from './actions';

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
        message: `Failed to invite guest ${payload.name}`,
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
