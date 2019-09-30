import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { selectedReducer } from './selected'

export const rootReducer = combineReducers({
    page: pageReducer,
    selected: selectedReducer,
});
