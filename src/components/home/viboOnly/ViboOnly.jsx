// 이 페이지가 메인화면에 뿌려질 화면이고, 바이보 컴포넌트들 적용한것임.

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Only1 from './only1/Only1';
import Only2 from './only2/Only2';
import MobileOnly from './MobileOnly';
import { Title, Underline2, ViboContainer } from './style';
import { getTopRated } from '../../../store/modules/getThunk';

const ViboOnly = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const dispatch = useDispatch();
  const { movies, tvShows, loading, error } = useSelector((state) => state.topRatedR);

  useEffect(() => {
    dispatch(getTopRated());
  }, [dispatch]);

  // 영화와 TV 시리즈 데이터를 하나의 배열로 합치고 정렬
  const combinedContent = [...(movies || []), ...(tvShows || [])]
    .map((item) => ({
      id: item.id,
      rank: item.vote_average,
      title: item.mediaType === 'movie' ? item.title : item.name,
      overview: item.overview,
      releaseYear: item.mediaType === 'movie' ? item.release_date?.split('-')[0] : item.first_air_date?.split('-')[0],
      genres: item.genre_ids,
      adult: item.adult,
      mediaType: item.mediaType,
      posterPath: item.poster_path,
      backdropPath: item.backdrop_path,
    }))
    .sort((a, b) => b.rank - a.rank)
    .slice(0, 5); // top 5만 추출

  // 1위와 2-5위 분리
  const firstPlace = combinedContent[0];
  const restPlaces = combinedContent.slice(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Title>
        <h3>VIBO TOP 5</h3>
        <Underline2 />
      </Title>
      {isMobile ? (
        <MobileOnly content={[firstPlace, ...restPlaces]} />
      ) : (
        <ViboContainer>
          <Only1 content={firstPlace} />
          <Only2 content={restPlaces} />
        </ViboContainer>
      )}
    </>
  );
};

export default ViboOnly;

{
  /* <>
//   <Title>
//     <h3>VIBO TOP 5</h3>
//     <Underline2 />
//   </Title>

//   <ViboContainer>
//     <Only1 />
//     <Only2 />
//   </ViboContainer>
// </> */
}
