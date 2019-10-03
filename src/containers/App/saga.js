import { all, cancel, delay, put, takeEvery } from 'redux-saga/effects';
import { APP_ACTIONS, SIMPLE_ACTION } from './actions';
import { makeGuest } from '../../utils/utils';

const DELAY_TIME = 100;

function* testSaga({ payload }) {
  const { name, isGoing, food } = payload;

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
