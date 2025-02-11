import { createSlice } from '@reduxjs/toolkit';
import { getTVseries } from './getThunk';
const initialState = {
    TVseriesData: [],
    loading: true,
    error: null,
    currentData: null,
};
export const tvSeriesSlice = createSlice({
    name: 'tvSeries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTVseries.pending, (state, action) => {})
            .addCase(getTVseries.fulfilled, (state, action) => {
                state.TVseriesData = action.payload;
            })
            .addCase(getTVseries.rejected, (state, action) => {});
    },
});
export const tvSeriesActions = tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;
