// commonlist filter content //비동기 api호출 데이터 가져오기
import { createAsyncThunk } from '@reduxjs/toolkit';
// 1. 애니메이션
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

// 참고
// const responseTV = await fetch(
//   `https://api.themoviedb.org/3/discover/tv?api_key=Yddf6521c43c2e03f59d2767f109aaaa4&with_origin_country=KR`
// );
// const tvShows = await responseTV.json();

// ...tvShows.results

// 2. 어두운 분위기의 극장 동시 개봉 영화? 드라마 ?  필터 - 극장개봉일, 장르(액션, 스릴러, 범죄, 공포, 미스터리 구성해봄), 평점 낮은건 제외

export const getDarkTheaterReleases = createAsyncThunk('movies/getDarkTheaterReleases', async (_, thunkAPI) => {
  try {
    let allResults = [];
    let page = 1;

    while (allResults.length < 50) {
      console.log(`📢 Fetching page ${page} for dark-themed theater releases...`);

      const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: API_KEY,
          primary_release_date_gte: new Date().toISOString().split('T')[0],
          with_release_type: 2,
          include_adult: false,
          page: page,
        },
      });

      const darkGenres = [28, 53, 80, 27, 9648];
      const filteredResults = response.data.results.filter(
        (movie) =>
          movie.poster_path && movie.vote_average >= 6.0 && movie.genre_ids.some((genre) => darkGenres.includes(genre))
      );

      allResults = [...allResults, ...filteredResults];

      page++;

      if (!response.data.results.length || page > 10) {
        break;
      }
    }

    console.log(`✅ Final results: ${allResults.length} movies`);
    return allResults.slice(0, 24);
  } catch (error) {
    console.error(' Error fetching dark-themed theater releases:', error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});
