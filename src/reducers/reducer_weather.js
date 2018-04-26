import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        //NEVER MANIPULATE STATE IN REACT AND/OR REDUX;
        //combine old array (state) & new array
            //[OLD]return state.concat([action.payload.data])
            //[NEW] using "spread syntax";
            return [action.payload.data, ...state];
    }

    return state;
}