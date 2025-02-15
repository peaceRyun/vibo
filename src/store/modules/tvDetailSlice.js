import { createSlice } from '@reduxjs/toolkit';
import { getTVDetail } from './getThunk';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

export const tvDetailSlice = createSlice({
    name: 'TVDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTVDetail.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTVDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getTVDetail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const tvDetailActions = tvDetailSlice.actions;
export default tvDetailSlice.reducer;
