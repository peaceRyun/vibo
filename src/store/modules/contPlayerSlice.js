import { createSlice } from '@reduxjs/toolkit';
import { getMovieVideos } from './getThunk';

const initialState = {
    isPlaying: false,
    isMuted: false,
    isFullscreen: false,
    progress: 0,
    isError: false,
    videoId: null,
    duration: 0,
    // 비디오 관련 상태
    videoData: null,
    loading: false,
    error: null,
};

const contPlayerSlice = createSlice({
    name: 'contentPlayer',
    initialState,
    reducers: {
        setPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        togglePlay: (state) => {
            state.isPlaying = !state.isPlaying;
        },
        setMuted: (state, action) => {
            state.isMuted = action.payload;
        },
        toggleMute: (state) => {
            state.isMuted = !state.isMuted;
        },
        setFullscreen: (state, action) => {
            state.isFullscreen = action.payload;
        },
        setProgress: (state, action) => {
            state.progress = action.payload;
        },
        setError: (state, action) => {
            state.isError = action.payload;
        },
        setVideoId: (state, action) => {
            state.videoId = action.payload;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        resetPlayer: () => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovieVideos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMovieVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videoData = action.payload;
                state.videoId = action.payload;
            })
            .addCase(getMovieVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.isError = true;
            });
    },
});

export const contPlayerActions = contPlayerSlice.actions;
export default contPlayerSlice.reducer;
