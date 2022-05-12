import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from "redux-saga";
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore (rootReducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;