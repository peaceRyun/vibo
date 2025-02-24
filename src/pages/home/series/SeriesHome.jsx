import React, { useState } from 'react';
import MainBanner from '../../../components/home/mainBanner/MainBanner';
import { MainContainer, MainContent } from '../main/style';
import CommonList from '../../../components/home/common/CommonList';
import GenreNav from '../../../components/home/genreNav/GenreNav';
import { MoreButton, Section } from '../movie/style';
import TabButton from '../../../ui/tab/TabButton';
import PopularList from '../../../components/home/popularlank/PopularList';
import RateList from '../../../components/home/rating/RateList';

const SeriesHome = () => {
    const [loadMore, setLoadMore] = useState(0);
    const seriesTabs = ['국내드라마', '미국드라마', '영국드라마', '일본드라마', '중국드라마'];

    const handleLoadMore = () => {
        setLoadMore((prev) => prev + 3);
    };

    // 추가로 로드될 CommonList 컴포넌트들을 생성
    const additionalLists = Array(loadMore)
        .fill(null)
        .map((_, index) => <CommonList key={`additional-${index}`} />);

    return (
        <MainContent>
            <MainBanner />
            <MainContainer>
                <TabButton tabs={seriesTabs} />
                <PopularList />
                <CommonList />
                <CommonList />
                <GenreNav />
                <CommonList />
                <CommonList />
                {additionalLists}
                <Section>
                    <MoreButton onClick={handleLoadMore}>더보기</MoreButton>
                </Section>
            </MainContainer>
        </MainContent>
    );
};

export default SeriesHome;
