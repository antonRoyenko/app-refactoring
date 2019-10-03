/*eslint-disable */
// import Immutable from 'seamless-immutable';

const makeGuest = (name, isGoing, favouriteFood) => ({
  id: Math.floor(Math.random() * 1000000),
  name,
  isGoing,
  favouriteFood,
});

/**
 * Types
 */
export const SIMPLE_ACTION_TRIGGER = 'SIMPLE_ACTION/TRIGGER';
export const SIMPLE_ACTION_SUCCESS = 'SIMPLE_ACTION/SUCCESS';
export const SIMPLE_ACTION_FAILURE = 'SIMPLE_ACTION/FAILURE';

/**
 * Actions
 */
export const simpleAction = values => dispatch => {
  dispatch({
    type: SIMPLE_ACTION_TRIGGER,
    payload: values,
  });

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  delay(1000).then(() => {
    if (Math.random() < 0.5) {
      dispatch({
        type: SIMPLE_ACTION_SUCCESS,
        payload: makeGuest(values.name, values.isGoing, values.food),
      });
    } else {
      dispatch({
        type: SIMPLE_ACTION_FAILURE,
        payload: values.name,
      });
    }
  });
};

/**
 * Selectors
 */

export const selectGuests = state => Object.values(state.root.guests);
export const selectLoading = state => state.root.loading;
export const selectMessage = state => state.root.message;

/**
 * Reducer
 */

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

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIMPLE_ACTION_TRIGGER:
      return {
        ...state,
        loading: true,
        message: '',
      };
    case SIMPLE_ACTION_FAILURE:
      return {
        ...state,
        loading: false,
        message: `Failed to invite guest ${payload}`,
      };
    case SIMPLE_ACTION_SUCCESS:
      return {
        ...state,
        guests: {
          ...state.guests,
          [payload.id]: payload,
        },
        loading: false,
        message: `Succesfuly invited guest ${payload.name}`,
      };
    default:
      return state;
  }
};

export default appReducer;
