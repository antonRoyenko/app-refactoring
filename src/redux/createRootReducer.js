// TODO could use combineReducers from redux-immutable
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from '../containers/App/reducer';

const createRootReducer = combineReducers({
  root: appReducer,
  form: formReducer,
});

export default createRootReducer;
