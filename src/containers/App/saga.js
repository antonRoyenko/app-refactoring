/*eslint-disable */
import { takeEvery, all, call } from 'redux-saga/effects';
import { SIMPLE_ACTION_TRIGGER } from './reducer';

function* testSaga(action) {
    // you can start doing staff...
    yield call(console.log, 'Hello, saga got:', action);
}

export default function* () {
    // This is your root saga,
    // it is already running,
    yield all([
        takeEvery(SIMPLE_ACTION_TRIGGER, testSaga),
    ]);

}
