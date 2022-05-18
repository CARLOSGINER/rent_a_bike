import {SET_DATA} from './types';

export default function catalogueReducer (state = {}, action)  {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data,
            };
        default: return state
    }
}