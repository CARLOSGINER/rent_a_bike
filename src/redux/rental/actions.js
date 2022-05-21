import { CALCULATE_TOTAL, OPEN_FORM_RENTAL, RESET_TOTAL, GET_RENTAL_PARAMETERS } from "./types"

export const calculateTotal =(formData)=>{
    return {
            type: CALCULATE_TOTAL,
            formData,
        }
}

export const resetTotal = () => {
    return {
        type: RESET_TOTAL,
    }
}

export const openNewRental = () => {
    return {
        type: OPEN_FORM_RENTAL,
    }
}

export const getRentalParameters =()=> {
    return {
        type: GET_RENTAL_PARAMETERS,
    }
}