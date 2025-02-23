import { BadgeBlank } from '../../pages/contents/style';
import StarRating from './StarRating';
import { Flex, FlexUl } from './style';

const ContDetail = ({ contentDetail, contentType, contentRating, onMoreClick }) => {
    if (!contentDetail) return null;

    const ratingImageMap = {
        19: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/19.svg',
        15: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/15.svg',
        12: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/12.svg',
        ALL: 'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/전체관람가 관람등급 1.png',
    };

    const getRatingImage = (contentRating) => {
        const ratingValue = contentRating?.rating || contentRating;
        return ratingImageMap[ratingValue] || ratingImageMap['ALL'];
    };

    const year =
        contentType === 'series'
            ? new Date(contentDetail.first_air_date).getFullYear()
            : new Date(contentDetail.release_date).getFullYear();

    const episodeCount = contentType === 'series' ? contentDetail.number_of_episodes : null;
    const rating = contentDetail.vote_average ? contentDetail.vote_average.toFixed(1) : 'N/A';

    //상세정보 간략 표시 부분 관련
    // const cast =
    //     contentDetail.credits?.cast
    //         ?.slice(0, 3)
    //         .map((actor) => actor.name)
    //         .join(', ') || '정보 없음';
    // const genres = contentDetail.genres?.map((genre) => genre.name).join(', ') || '정보 없음';

    // const handleMoreClick = () => {
    //     const moreDetailElement = document.getElementById('cont-more-detail');
    //     if (moreDetailElement) {
    //         moreDetailElement.scrollIntoView({ behavior: 'smooth' });
    //     }
    //     onMoreClick?.();
    // };

    return (
        <section>
            <Flex $gap='15px' $padding='30px 0 30px' $justifyContent='space-between' $width='80%'>
                <Flex $flexDirection='column' $gap='15px'>
                    <Flex $gap='15px' $alignItems='center'>
                        <span>{year}년</span>
                        {contentType === 'series' && <span>에피소드 {episodeCount}화</span>}
                        <BadgeBlank>FHD</BadgeBlank>
                    </Flex>
                    <Flex $gap='10px' $alignItems='center'>
                        <img
                            src={getRatingImage(contentRating)}
                            alt={`Rating ${contentRating?.rating || contentRating}`}
                            style={{ width: '24px' }}
                        />
                        <img
                            src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/내용정보-선정성.png'
                            alt='rateAll'
                            style={{ width: '24px' }}
                        />
                        <StarRating rating={rating} />
                    </Flex>
                    <p>{contentDetail.overview || '줄거리 정보가 없습니다.'}</p>
                </Flex>
                {/* 주석 처리된 FlexUl 부분은 그대로 유지 */}
            </Flex>
        </section>
    );
};

export default ContDetail;
