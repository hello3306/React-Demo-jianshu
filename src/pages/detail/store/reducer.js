import { fromJS } from 'immutable';
import * as actionType from "./actionType";

const defaultState = fromJS({
    content:'',

})



export default (state = defaultState, action) => {

    switch (action.type) {
        case actionType.GET_CONTENT:
            console.log(action)
            return state.merge({
                content: action.content
            });
        default:
            return state;
    }
}