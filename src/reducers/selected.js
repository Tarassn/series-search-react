import {SET_SELECTED} from "../actions/SelectedActions";


export const initialState = {
    selectedObjects:(JSON.parse(localStorage.getItem('selectedObjects'))|| {}),
};

export function selectedReducer(state = initialState,action) {

    switch (action.type) {
        case SET_SELECTED:
            return {...state,selectedObjects: action.payload};
        default:
            return state
    }
}