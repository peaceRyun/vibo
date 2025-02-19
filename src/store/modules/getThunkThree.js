// commonlist filter content //비동기 api호출 데이터 가져오기
import { createAsyncThunk } from '@reduxjs/toolkit';
// 1. 한국이 만든 콘텐츠 (드라마나 영화 상관없이 / 국가로 구별)

import axios from 'axios';

const API_KEY = 'ddf6521c43c2e03f59d2767f109aaaa4';

export const getAnimations = createAsyncThunk('animations/getAnimations', async (_, thunkAPI) => {
  try {
    let allResults = [];
    let page = 1;

    while (allResults.length < 50) {
      console.log(`📢 Fetching page ${page} for animations...`);

      // 애니메이션 데이터 가져오기
      const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: API_KEY,
          with_genres: 16, // 애니메이션 장르 ID
          include_adult: false, // 성인물 제외
          page: page,
        },
      });

      // 필터링: overview, poster_path, backdrop_path가 있는 콘텐츠만
      const filteredResults = response.data.results.filter(
        (animation) => animation.overview && animation.poster_path && animation.backdrop_path
      );

      // 24개까지 채우기
      allResults = [...allResults, ...filteredResults];

      // 다음 페이지로 이동
      page++;

      // 더 이상 결과가 없거나 10페이지까지 검색했다면 종료
      if (!response.data.results.length || page > 10) {
        break;
      }
    }

    console.log(`✅ Final results: ${allResults.length} animations`);
    return allResults.slice(0, 24);
  } catch (error) {
    console.error('❌ Error fetching animations:', error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

//
// const responseTV = await fetch(
//   `https://api.themoviedb.org/3/discover/tv?api_key=Yddf6521c43c2e03f59d2767f109aaaa4&with_origin_country=KR`
// );
// const tvShows = await responseTV.json();

// ...tvShows.results
