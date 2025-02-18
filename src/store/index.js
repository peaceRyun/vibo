import { configureStore } from '@reduxjs/toolkit';
// import aboutR from './modules/aboutSlice';
import contentR from './modules/contentSlice';
import memberR from './modules/memberSlice';
import playerR from './modules/playerSlice';
import movieR from './modules/movieSlice';
import tvSeriesR from './modules/tvSeriesSlice';
// import pagenationR from './modules/pagenationSlice';
import contPlayerR from './modules/contPlayerSlice';
import profileR from './modules/profileSlice';
import reviewR from './modules/reviewSlice';
import tvDetailR from './modules/tvDetailSlice';
import topRatedR from './modules/topRatedSlice';
import searchR from './modules/searchSlice';

export const store = configureStore({
    reducer: {
        // aboutR,
        contentR,
        memberR,
        playerR,
        movieR,
        tvSeriesR,
        contPlayerR,
        // pagenationR,
        profileR,
        reviewR,
        tvDetailR,
        topRatedR,
        searchR,
    },
});
