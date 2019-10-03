/*eslint-disable */
import { takeEvery, all } from 'redux-saga/effects';
import { SIMPLE_ACTION } from './actions';

function* testSaga(action) {
    // you can start doing staff...
    // yield call(console.log, 'Hello, saga got:', action);
}

export default function* () {
    // This is your root saga,
    // it is already running,
    yield all([
        takeEvery(SIMPLE_ACTION.TRIGGER, testSaga),
    ]);

}
