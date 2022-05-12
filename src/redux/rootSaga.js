import { all, call } from 'redux-saga/effects';
import catalogue from './catalogue/sagas';

function* rootSaga() {
    yield all([
        call(catalogue),
    ])
}

export default rootSaga;