import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for the counter
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        zero: () => 0,
    },
});

// Export actions
export const { increment, decrement, zero } = counterSlice.actions;

// Configure store
const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;
