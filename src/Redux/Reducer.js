import { INCREMENT,DECREMENT } from './ActionType';

const InitialState = { 
    count:0,
}

const CounterReducer = (state=InitialState, action) => {
    switch( action.type ){
        case INCREMENT: 
        return{
            ...state,
            count: state.count +1,
        };
        case DECREMENT: 
        return{
            ...state,
            count: state.count -1,
    };
    default:
        return state;
}
}

export default CounterReducer;

