import { setDate, setRateSwitch, SET_DATE, SET_RATE_SWITCH} from "../actions/PageActions";
import {setSelected ,SET_SELECTED} from "../actions/SelectedActions";


describe('action tests',()=>{
    it('returns an action with type "SET_DATE', ()=>{
        const action = setDate();
        expect(action).toEqual({type: SET_DATE})
    });
    it('returns an action with type "SET_SELECTED', ()=>{
        const mock = {props:{
                selectedObjects:{}
            }};
        const action = setSelected(1,mock, "2" );
        expect(action).toEqual({ payload: {1:"2"} ,type: SET_SELECTED})
    });
});
