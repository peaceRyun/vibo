import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    watchHistory: JSON.parse(localStorage.getItem('watchHistory')) || [],
};

const watchSlice = createSlice({
    name: 'watchR',
    initialState,
    reducers: {
        addWatchHistory: (state, action) => {
            const newHistory = action.payload;

            // 중복 방지 (같은 콘텐츠가 연속해서 추가되지 않도록)
            const exists = state.watchHistory.some((item) => item.id === newHistory.id);
            if (!exists) {
                state.watchHistory.unshift(newHistory); // 최신순 저장
                localStorage.setItem('watchHistory', JSON.stringify(state.watchHistory));
            }
        },
    },
});

export const { addWatchHistory } = watchSlice.actions;
export default watchSlice.reducer;
