import { FilterData } from "../../utils/filterData";
import { CALCULATE_TOTAL, RESET_TOTAL, SET_PARAMETERS } from "./types";
import { Operation } from "../../utils/operation";

export default function rentalReducer(state={}, action) {
    switch (action.type) {
        case SET_PARAMETERS:
            return {
                ...state,
                data: action.parameters
            }
        case CALCULATE_TOTAL:
            const { type: selectedType, days } = action.formData;
            const parameter = FilterData.selectionOnly( state.data.Parameters, "type", selectedType);
            const {base_price, base_price_max_days} = parameter[0];
            const total = Operation.multiplyConditionally(parseInt(base_price), days, parseInt(base_price_max_days) );
            const extraDaysCost = total - parseInt(base_price)
            const extraDays = parseInt(days) - parseInt(base_price_max_days);
            return {
                ...state,
                formTotal:{
                    total,
                    extraDaysCost,
                    base_price,
                    base_price_max_days,
                    extraDays
                }
            }
        case RESET_TOTAL: 
            return {
                ...state,
                formTotal: {}
            }
        default: 
            return state;
    }
}