import { put, takeLatest, call, delay } from 'redux-saga/effects';
import { OPEN_FORM_RENTAL, SET_PARAMETERS, GET_RENTAL_PARAMETERS } from './types';
import DataApi from "../../api/data";
import { getCatalogueData } from '../catalogue/sagas';


function* getRentalParameters() {
    try {
        const response = yield DataApi.getData('https://raw.githubusercontent.com/CARLOSGINER/rent_a_bike/master/public/data/rentalParameters.json')
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
        yield delay(3000) //Simulating possible slow response from server to retrieve the parameters
        yield call(getRentalParameters);

    } catch (error) {
        console.log(error);
    }
}

export default function* rental() {
    yield takeLatest(OPEN_FORM_RENTAL, openRentalForm)
    yield takeLatest(GET_RENTAL_PARAMETERS, getRentalParameters)
}