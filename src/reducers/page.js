import { SET_MIN_RATE, GET_SERIES, SET_SEARCH, SET_DATE} from '../actions/PageActions'

const initialState = {
    minRateFilter: 1,
    searchField:(localStorage.getItem('searchField')|| ""),
    isFetching: false,
    myJson:[],
    date:new Date(),
};

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MIN_RATE:
            return {...state,minRateFilter: action.payload,};
        case SET_SEARCH:
            return {...state,searchField: action.payload};
        case GET_SERIES:
            return {...state,myJson: action.payload};
        case SET_DATE:
            return {...state,date: action.payload}
        default:
            return state
    }
}