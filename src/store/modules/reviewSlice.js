import { createSlice } from '@reduxjs/toolkit';
import { getTVReviews } from './getThunk';

const initialState = {
    reviewData: [],
    loading: false,
    error: null,
    currentMovieId: null,
};

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        clearReviews: (state) => {
            state.reviewData = [];
            state.currentMovieId = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTVReviews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTVReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.reviewData = action.payload;
                state.currentMovieId = action.meta.arg; // movieId 저장
            })
            .addCase(getTVReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearReviews } = reviewSlice.actions;
export default reviewSlice.reducer;
