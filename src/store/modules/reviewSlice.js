import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    reviews: JSON.parse(localStorage.getItem('reviews')) || [],
};

const reviewSlice = createSlice({
    name: 'reviewR',
    initialState,
    reducers: {
        addReview: (state, action) => {
            state.reviews.push(action.payload);
            localStorage.setItem('reviews', JSON.stringify(state.reviews));
        },
    },
});

export const { addReview } = reviewSlice.actions;
export default reviewSlice.reducer;
