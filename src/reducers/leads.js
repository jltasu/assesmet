import { GET_LEADS } from '../actiontype/types';

const initialState = {
    leads: []
}

export default function (state = initialState, action){
    switch(action.types){
        case GET_LEADS:
            return {
                ...state,
                leads: action.payload
            };
        default:
            return state;
    }
}