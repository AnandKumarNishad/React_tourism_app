import { ActionTypes } from "../constants/action-types";

const initialState = {
    states:[],
};

export const stateReducer = (stateOf = initialState, {type, payload }) => {
    switch (type) {
        case ActionTypes.SET_STATES:
            return { ...stateOf, states: payload };
        default:
            return stateOf
    }
}

export const selectedStateReducer = (stateOf = [], {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_STATE:
            return { ...stateOf, ...payload };
        case ActionTypes.REMOVE_SELECTED_STATE:
            return {};
        default:
            return stateOf;
    }
}