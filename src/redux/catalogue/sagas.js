import { put, takeLatest } from "redux-saga/effects";
import {GET_DATA, SET_DATA} from '../catalogue/types'; 
import DataApi from "../../api/data";

function* getCatalogueData() {
    try{
        const response = yield DataApi.getData('../../data/catalogueData.json')
        yield put({
            type: SET_DATA,
            data: response.data,
        })
    } catch (error) {
        console.log(error)
    }
}


export default function* catalogue() {
    yield takeLatest(GET_DATA, getCatalogueData)
}