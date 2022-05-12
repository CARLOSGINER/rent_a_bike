import { combineReducers } from 'redux';
import catalogueReducer from './catalogue/reducer';

const rootReducer = combineReducers({
    catalogue: catalogueReducer,
});

export default rootReducer;