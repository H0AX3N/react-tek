import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 }

const counter = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            state.value += 1
        },
        decrement : (state) => {
            if(state.value < 1) {
                return; // Prevent decrementing below 0
            }
            state.value -= 1
        },
        reset : (state) => {
            state.value = 0
        }
    }
})

export const {increment, decrement, reset} = counter.actions;
export default counter.reducer;