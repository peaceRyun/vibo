import { createSlice } from '@reduxjs/toolkit';
import { getAiringToday } from './getThunk';

const initialState = {
    weeklyContent: {},
    loading: false,
    error: null,
    isComplete: false,
};

export const weeklySlice = createSlice({
    name: 'weekly',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAiringToday.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isComplete = false;
            })
            .addCase(getAiringToday.fulfilled, (state, action) => {
                state.loading = false;
                state.weeklyContent = action.payload;
                state.isComplete = true;
            })
            .addCase(getAiringToday.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isComplete = false;
            });
    },
});

export const weeklyActions = weeklySlice.actions;
export default weeklySlice.reducer;
