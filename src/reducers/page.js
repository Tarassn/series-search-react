import { SET_MIN_RATE, GET_SERIES,SET_SEARCH,} from '../actions/PageActions'

const initialState = {
    minRateFilter: 1,
    searchField:(localStorage.getItem('searchField')|| ""),
    isFetching: false,
    myJson:[]
};

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MIN_RATE:
            return {...state,minRateFilter: action.payload,};
        case SET_SEARCH:
            return {...state,searchField: action.payload};
        case GET_SERIES:
            return {...state,myJson: action.payload};
        default:
            return state
    }
}