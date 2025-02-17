import { createSlice } from '@reduxjs/toolkit';
import { getAiringToday } from './getThunk';

const initialState = {
    weeklyContent: {},
    loading: false,
    error: null,
};

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAiringToday.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAiringToday.fulfilled, (state, action) => {
                state.loading = false;
                state.weeklyContent = action.payload;
            })
            .addCase(getAiringToday.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const contentActions = contentSlice.actions;
export default contentSlice.reducer;
