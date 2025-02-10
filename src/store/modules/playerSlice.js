import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPlaying: true,
    progress: 0,
    duration: 0,
    currentTime: 0,
    videoId: 'MkcqlqCfYcg',
};

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setProgress: (state, action) => {
            state.progress = action.payload;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        setVideoId: (state, action) => {
            state.videoId = action.payload;
        },
    },
});

export const { setPlaying, setProgress, setDuration, setCurrentTime, setVideoId } = playerSlice.actions;

export default playerSlice.reducer;
