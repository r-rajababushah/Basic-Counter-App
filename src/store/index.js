import { configureStore } from '@reduxjs/toolkit';

const reducrFn = (state = { counter: 10 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {counter: state.counter + 1};
        case 'DECREMENT':
            return {counter: state.counter - 1};
        default:
            return {counter: state.counter};
    }
}

const store = configureStore({ reducer: reducrFn });
export default store;