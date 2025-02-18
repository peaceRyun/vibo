import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTVDetail } from '../../store/modules/getThunk';
import { BadgeBlank } from '../../pages/contents/style';
import { Flex, FlexUl } from './style';

const ContDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.tvDetailR);

  useEffect(() => {
    if (id) {
      dispatch(getTVDetail(id));
    }
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (!data) return null;

  const year = new Date(data.first_air_date).getFullYear();
  const episodeCount = data.number_of_episodes;
  const cast =
    data.credits?.cast
      ?.slice(0, 3)
      .map((actor) => actor.name)
      .join(', ') || '정보 없음';
  const genres = data.genres?.map((genre) => genre.name).join(', ') || '정보 없음';

  return (
    <section>
      <Flex $gap="15px" $padding="30px 0 30px" $justifyContent="space-between">
        <Flex $flexDirection="column" $gap="15px">
          <Flex $gap="15px" $alignItems="center">
            <span>{year}년</span>
            <span>에피소드 {episodeCount}화</span>
            <BadgeBlank>FHD</BadgeBlank>
          </Flex>
          <Flex $gap="10px">
            <img src="/contentdetail/contentrate/전체관람가 관람등급 1.png" alt="rateAll" style={{ width: '24px' }} />
            <img src="/contentdetail/contentrate/내용정보-선정성.png" alt="rateAll" style={{ width: '24px' }} />
            {/* 평점 해야함 수정 필요. 자리만 확인함 */}
            <BadgeBlank> 평점 7 / 10 </BadgeBlank>
          </Flex>
          <p>{data.overview || '줄거리 정보가 없습니다.'}</p>
        </Flex>
        <FlexUl $flexDirection="column" $gap="15px">
          <li>
            <Flex $gap="8px" $whiteSpace="nowrap" $fontSize="16px">
              <strong style={{ color: 'var(--gray-600)' }}>출연: </strong>
              <p>{cast}</p>
              <span>더보기</span>
            </Flex>
          </li>
          <li>
            <Flex $gap="8px" $whiteSpace="nowrap" $fontSize="16px">
              <strong style={{ color: 'var(--gray-600)' }}>장르: </strong>
              <p>{genres}</p>
              <span>더보기</span>
            </Flex>
          </li>
          <li>
            <Flex $gap="8px" $whiteSpace="nowrap" $fontSize="16px">
              <strong style={{ color: 'var(--gray-600)' }}>콘텐츠 특징: </strong>
              <p>{data.keywords?.keywords?.map((k) => k.name).join(', ') || '정보 없음'}</p>
              <span>더보기</span>
            </Flex>
          </li>
        </FlexUl>
      </Flex>
    </section>
  );
};

export default ContDetail;
