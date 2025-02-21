import React, { useState, useEffect } from 'react';
import {
    ButtonContainer,
    Content,
    ContMobileContainer,
    Description,
    DescriptionText, // 새로 추가된 스타일 컴포넌트 임포트
    EpisodeInfo,
    Header,
    IconSection,
    LikeIcon,
    PlayBar,
    PlayMobileButton,
    ProgressBar,
    RatingIcon,
    RatingNumber,
    SeasonInfo,
    SeasonTitle,
    ShareIcon,
    TimeRemaining,
} from './style';
import { FaPlay } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';
import MoreFilter from './MoreFilter';

const ContMobile = ({ contentDetail, contentType }) => {
    // 기존 코드 유지...
    const [progress, setProgress] = useState(0);
    const isSeries = contentType === 'series';

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 50) {
                setProgress((prev) => prev + 1);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [progress]);

    // 기존 데이터 처리 로직 유지...
    const title = isSeries ? contentDetail?.name : contentDetail?.title;
    const releaseDate = isSeries ? contentDetail?.first_air_date : contentDetail?.release_date;
    const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : '';
    const genres = contentDetail?.genres?.map((genre) => genre.name).join(', ') || '';
    const seasonCount = contentDetail?.number_of_seasons || 0;
    const episodeCount = contentDetail?.number_of_episodes || 0;
    const cast =
        contentDetail?.credits?.cast
            ?.slice(0, 3)
            .map((actor) => actor.name)
            .join(', ') || '';
    const creators = isSeries
        ? contentDetail?.created_by?.map((creator) => creator.name).join(', ')
        : contentDetail?.production_companies?.[0]?.name;
    const overview = contentDetail?.overview || '';

    return (
        <div>
            <ContMobileContainer>
                <Header>
                    <SeasonTitle>{title || '제목 로딩 중...'}</SeasonTitle>
                    <div>{genres}</div>
                    <SeasonInfo>{releaseYear}년 전체 FHD</SeasonInfo>
                    {isSeries && (
                        <EpisodeInfo>
                            시즌 {seasonCount}: {episodeCount}화 | {releaseDate}
                        </EpisodeInfo>
                    )}
                    <PlayBar>
                        <ProgressBar value={progress} max='100' />
                        <TimeRemaining>10분 남음</TimeRemaining>
                    </PlayBar>
                </Header>
                <ButtonContainer>
                    <PlayMobileButton>
                        <FaPlay size={20} />
                        재생
                    </PlayMobileButton>
                </ButtonContainer>
                <Content>
                    <Description>
                        {/* h4 대신 DescriptionText 사용 */}
                        <DescriptionText>
                            {overview.length > 100 ? `${overview.substring(0, 100)}...` : overview}
                        </DescriptionText>
                        <div>
                            <p>
                                출연 : {cast || '정보 없음'}
                                <button
                                    onClick={() => {
                                        return <MoreFilter />;
                                    }}
                                >
                                    더보기
                                </button>
                            </p>
                            <p>크리에이터 : {creators || '정보 없음'}</p>
                        </div>
                    </Description>
                    <IconSection>
                        <LikeIcon>
                            <img
                                src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/하트active.png'
                                alt='하트'
                            />
                            <p>좋아요</p>
                        </LikeIcon>
                        <RatingIcon>
                            <RatingNumber>
                                {/* 중첩 문제 해결을 위해 h2 대신 span 사용 */}
                                <span className='rating-value'>
                                    {contentDetail?.vote_average ? Math.round(contentDetail.vote_average / 2) : 3}
                                </span>
                                <span>/5</span>
                            </RatingNumber>
                            <p>평점</p>
                        </RatingIcon>
                        <ShareIcon>
                            <IoShareSocial size={30} />
                            <p>공유</p>
                        </ShareIcon>
                    </IconSection>
                </Content>
            </ContMobileContainer>
        </div>
    );
};

export default ContMobile;
