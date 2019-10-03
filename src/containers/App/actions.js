import createAction from '../../utils/createAction';

const actionScope = 'LISTING.';

const SIMPLE_ACTION = {
  TRIGGER: `${actionScope}TRIGGER`,
  SUCCESS: `${actionScope}SUCCESS`,
  FAILURE: `${actionScope}FAILURE`,
};

export const APP_ACTIONS = {
  TRIGGER: createAction(SIMPLE_ACTION.TRIGGER),
  SUCCESS: createAction(SIMPLE_ACTION.SUCCESS),
  FAILURE: createAction(SIMPLE_ACTION.FAILURE),
};
