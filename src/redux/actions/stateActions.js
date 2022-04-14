import { ActionTypes } from "../constants/action-types"

export const setStates = (states) => {
    return {
        type : ActionTypes.SET_STATES,
        payload : states,
    }
}

export const selectedState = (statePlace) => {
    return {
        type : ActionTypes.SELECTED_STATE,
        payload : statePlace,
    }
}

export const removeSelectedState = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_STATE,
    }
}