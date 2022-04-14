import { combineReducers } from "redux";
import { stateReducer, selectedStateReducer } from "./stateReducer";

export const reducers = combineReducers ({
    allStates : stateReducer,
    statePlace : selectedStateReducer,
});
