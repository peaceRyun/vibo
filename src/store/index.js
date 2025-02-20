import { configureStore } from '@reduxjs/toolkit';
// import aboutR from './modules/aboutSlice';
import weeklyR from './modules/weeklySlice';
import memberR from './modules/memberSlice';
import playerR from './modules/playerSlice';
import movieR from './modules/movieSlice';
import tvSeriesR from './modules/tvSeriesSlice';
// import pagenationR from './modules/pagenationSlice';
import contPlayerR from './modules/contPlayerSlice';
import profileR from './modules/profileSlice';
import tvDetailR from './modules/tvDetailSlice';
import topRatedR from './modules/topRatedSlice';
import searchR from './modules/searchSlice';
import popularR from './modules/popularSlice';
import genreR from './modules/genreSlice';

export const store = configureStore({
    reducer: {
        // aboutR,
        weeklyR,
        memberR,
        playerR,
        movieR,
        tvSeriesR,
        contPlayerR,
        // pagenationR,
        profileR,
        tvDetailR,
        topRatedR,
        searchR,
        popularR,
        genreR,
    },
});
