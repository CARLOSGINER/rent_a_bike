import { put, takeLatest, call } from 'redux-saga/effects';
import { OPEN_FORM_RENTAL, SET_PARAMETERS } from './types';
import DataApi from "../../api/data";
import { getCatalogueData } from '../catalogue/sagas';


function* getRentalParameters() {
    try {
        const response = yield DataApi.getData('../../data/rentalParameters.json')
        yield put ({
            type: SET_PARAMETERS,
            parameters: response.data
        })
    } catch (error) {
        console.log(error);
    }
}

function* openRentalForm() {
    try{
        yield call(getCatalogueData);
        yield call(getRentalParameters);
    } catch (error) {
        console.log(error);
    }
}

export default function* rental() {
    yield takeLatest(OPEN_FORM_RENTAL, openRentalForm)
}