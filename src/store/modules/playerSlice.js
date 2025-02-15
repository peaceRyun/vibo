import { createSlice } from '@reduxjs/toolkit';
import { getTVVideos } from './getThunk';

const initialState = {
    isPlaying: true,
    progress: 0,
    duration: 0,
    currentTime: 0,
    videoId: 'MkcqlqCfYcg',
    loading: false,
    error: null,
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
            console.log('setVideoId action:', action.payload);
            state.videoId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTVVideos.pending, (state) => {
                console.log('getTVVideos.pending');
                state.loading = true;
                state.error = null;
            })
            .addCase(getTVVideos.fulfilled, (state, action) => {
                console.log('getTVVideos.fulfilled with payload:', action.payload);
                state.loading = false;
                state.videoId = action.payload;
            })
            .addCase(getTVVideos.rejected, (state, action) => {
                console.log('getTVVideos.rejected with error:', action.payload);
                state.loading = false;
                state.error = action.payload;
                state.videoId = 'MkcqlqCfYcg';
            });
    },
});

export const { setPlaying, setProgress, setDuration, setCurrentTime, setVideoId } = playerSlice.actions;

export default playerSlice.reducer;
