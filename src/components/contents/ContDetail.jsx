import { BadgeBlank } from '../../pages/contents/style';
import { Flex, FlexUl } from './style';

const ContDetail = ({ contentDetail, contentType, onMoreClick }) => {
    if (!contentDetail) return null;

    // contentType에 따라 다른 데이터 포맷 처리
    const year =
        contentType === 'series'
            ? new Date(contentDetail.first_air_date).getFullYear()
            : new Date(contentDetail.release_date).getFullYear();

    const episodeCount = contentType === 'series' ? contentDetail.number_of_episodes : null;
    const rating = contentDetail.vote_average ? contentDetail.vote_average.toFixed(1) : 'N/A';
    const cast =
        contentDetail.credits?.cast
            ?.slice(0, 3)
            .map((actor) => actor.name)
            .join(', ') || '정보 없음';
    const genres = contentDetail.genres?.map((genre) => genre.name).join(', ') || '정보 없음';

    const handleMoreClick = () => {
        const moreDetailElement = document.getElementById('cont-more-detail');
        if (moreDetailElement) {
            moreDetailElement.scrollIntoView({ behavior: 'smooth' });
        }
        onMoreClick?.();
    };

    return (
        <section>
            <Flex $gap='15px' $padding='30px 0 30px' $justifyContent='space-between'>
                <Flex $flexDirection='column' $gap='15px'>
                    <Flex $gap='15px' $alignItems='center'>
                        <span>{year}년</span>
                        {contentType === 'series' && <span>에피소드 {episodeCount}화</span>}
                        <BadgeBlank>FHD</BadgeBlank>
                    </Flex>
                    <Flex $gap='10px'>
                        <img
                            src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/전체관람가 관람등급 1.png'
                            alt='rateAll'
                            style={{ width: '24px' }}
                        />
                        <img
                            src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/내용정보-선정성.png'
                            alt='rateAll'
                            style={{ width: '24px' }}
                        />
                        <BadgeBlank> 평점 {rating} / 10 </BadgeBlank>
                    </Flex>
                    <p>{contentDetail.overview || '줄거리 정보가 없습니다.'}</p>
                </Flex>
                <FlexUl $flexDirection='column' $gap='15px'>
                    <li>
                        <Flex $gap='8px' $whiteSpace='nowrap' $fontSize='16px'>
                            <strong style={{ color: 'var(--gray-600)' }}>출연: </strong>
                            <p>{cast}</p>
                            <span onClick={handleMoreClick} style={{ cursor: 'pointer' }}>
                                더보기
                            </span>
                        </Flex>
                    </li>
                    <li>
                        <Flex $gap='8px' $whiteSpace='nowrap' $fontSize='16px'>
                            <strong style={{ color: 'var(--gray-600)' }}>장르: </strong>
                            <p>{genres}</p>
                            <span onClick={handleMoreClick} style={{ cursor: 'pointer' }}>
                                더보기
                            </span>
                        </Flex>
                    </li>
                    <li>
                        <Flex $gap='8px' $whiteSpace='nowrap' $fontSize='16px'>
                            <strong style={{ color: 'var(--gray-600)' }}>콘텐츠 특징: </strong>
                            <p>{contentDetail.keywords?.keywords?.map((k) => k.name).join(', ') || '정보 없음'}</p>
                            <span onClick={handleMoreClick} style={{ cursor: 'pointer' }}>
                                더보기
                            </span>
                        </Flex>
                    </li>
                </FlexUl>
            </Flex>
        </section>
    );
};

export default ContDetail;
