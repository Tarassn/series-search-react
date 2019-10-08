import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, storeFactory} from "./testUtils";

import Main from "../components/Main";
import {SET_MIN_RATE, setMinRate} from "../actions/PageActions";


describe('`setMinRate` action creator call', () => {
    let setMinRateMock;
    let wrapper;
    beforeEach(() => {
        setMinRateMock = jest.fn();
        const props = {
            setMinRate: setMinRateMock
        };
        wrapper = shallow(<Main {...props} />);
        wrapper.instance().selectRef.current = {value: 1};
        const select = findByTestAttr(wrapper, 'min-rate-select');
        select.simulate('change');
    });
    it('calls `setMinRate` when select is changed', () => {
        const  setMinRateMockCallCount = setMinRateMock.mock.calls.length;
        expect(setMinRateMockCallCount).toBe(1);
    });
    // it('calls `setMinRate` with input value as argument', () => {
    //     console.log(setMinRateMock.mock.calls)
    //     const setMinRateArg= setMinRateMock.mock.calls[0][0];
    //     expect(setMinRateArg).toBe({value: 1});
    // });
});

it('renders without error', ()=>{

});