import { createSlice } from '@reduxjs/toolkit';
import { fetchPopularContentThunk } from './getThunk';

const initialState = {
    popularContent: [],
    status: 'idle',
    error: null,
};

const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularContentThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPopularContentThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.popularContent = action.payload;
            })
            .addCase(fetchPopularContentThunk.rejected, (state, action) => {
                state.status = 'failed';
                // action.error.message로 접근
                state.error = action.error.message;
            });
    },
});

export const popularActions = popularSlice.actions;
export default popularSlice.reducer;
