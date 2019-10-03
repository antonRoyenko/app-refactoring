import { all, cancel, put, select, takeEvery } from 'redux-saga/effects';
import { APP_ACTIONS, SIMPLE_ACTION } from './actions';
import { makeGuest } from '../../utils/utils';
import { makeSelectFormValues } from './selectors';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const DELAY_TIME = 1000;

function* testSaga() {
  const values = yield select(makeSelectFormValues);
  const { name, isGoing, food } = values;

  yield delay(DELAY_TIME);
  if (Math.random() < 0.5) {
    yield put(APP_ACTIONS.SUCCESS(makeGuest(name, isGoing, food)));

    yield cancel();
  }

  yield put(APP_ACTIONS.FAILURE(makeGuest(name)));
}

export default function* rootSaga() {
  yield all([takeEvery(SIMPLE_ACTION.TRIGGER, testSaga)]);
}
