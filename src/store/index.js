import { configureStore } from '@reduxjs/toolkit';
// import aboutR from './modules/aboutSlice';
// import contentR from './modules/contentSlice';
// import memberR from './modules/memberSlice';
import playerR from './modules/playerSlice';
// import tmR from './modules/tmSlice';
// import pagenationR from './modules/pagenationSlice';

export const store = configureStore({
    reducer: {
        // aboutR,
        // contentR,
        // memberR,
        playerR,
        // tmR,
        // pagenationR,
    },
});
