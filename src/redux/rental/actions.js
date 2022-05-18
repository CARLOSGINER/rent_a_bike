import { CALCULATE_TOTAL, OPEN_FORM_RENTAL } from "./types"

export const calculateTotal =(formData)=>{
    return {
            type: CALCULATE_TOTAL,
            formData,
        }
}

export const openNewRental = () => {
    return {
        type: OPEN_FORM_RENTAL,
    }
}