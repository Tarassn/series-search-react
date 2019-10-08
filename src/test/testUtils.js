import checkPropTypes from 'check-prop-types';
import {rootReducer} from '../reducers';
import {createStore, applyMiddleware} from "redux";
import {middlewares} from "../store/configureStore";

export const storeFactory = (initialState) => {
    const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleWare(rootReducer,initialState)
};

export const findByTestAttr = (wrapper,val) => {
    return  wrapper.find(`[data-test="${val}"]`)
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes (
      component.propTypes,
      conformingProps,
      'prop',
      component.name);
  expect(propError).toBeUndefined();
};