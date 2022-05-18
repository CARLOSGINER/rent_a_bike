import { combineReducers } from 'redux';
import catalogueReducer from './catalogue/reducer';
import rentalReducer from './rental/reducer';

const rootReducer = combineReducers({
    catalogue: catalogueReducer,
    rental: rentalReducer,
});

export default rootReducer;