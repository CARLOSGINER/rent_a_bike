import { all, call } from 'redux-saga/effects';
import catalogue from './catalogue/sagas';
import rental from './rental/sagas';

function* rootSaga() {
    yield all([
        call(catalogue),
        call(rental),
    ])
}

export default rootSaga;