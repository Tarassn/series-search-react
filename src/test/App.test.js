import React from 'react';
import {shallow} from 'enzyme';


import {storeFactory} from "./testUtils";
import App from "../App";

const setup = ((state = {}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<App store = {store}/>).dive().dive();
    return wrapper;
});

describe('redux properties', () => {
    it('has access to `page` state', () => {
        const page = {
            minRateFilter: 1,
            searchField:'',
            rateSwitch:true,
            isFetching: false,
            myJson:[],
            date:null,
        };
        const wrapper = setup({page});
        const pageProp = wrapper.instance().props.page;
        pageProp.date = null;
        expect(pageProp).toEqual(page);
    });
    it('has access to `selected` state', () => {
        const selected = {
            selectedObjects:{},
        };
        const wrapper = setup({selected});
        const selectedProp = wrapper.instance().props.selected;
        expect(selectedProp).toBe(selected);
    });
});
describe('App action props are instances of Function',()=>{
    let wrapper = setup();
    let {getSeries, setMinRate, setSelected, setDate, setRateSwitch} = wrapper.instance().props;

    it('`setMinRate` action creator is a function on the props', () => {
        const setMinRateProp = setMinRate;
        expect(setMinRateProp).toBeInstanceOf(Function);
    });
    it('`getSeries` action creator is a function on the props', () => {
        const getSeriesProp = getSeries;
        expect(getSeriesProp).toBeInstanceOf(Function);
    });
    it('`setSelected` action creator is a function on the props', () => {
        const setSelectedProp =setSelected;
        expect(setSelectedProp).toBeInstanceOf(Function);
    });
    it('`setDate` action creator is a function on the props', () => {
        const setDateProp = setDate;
        expect(setDateProp).toBeInstanceOf(Function);
    });
    it('`setRateSwitch` action creator is a function on the props', () => {
        const setRateSwitchProp =setRateSwitch;
        expect(setRateSwitchProp).toBeInstanceOf(Function);
    });
});