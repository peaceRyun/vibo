import { Container, Poster, InfoSection, Title, Tags, Tag, Description, OnlyContainer, Label, Flex } from './style';

const Only2 = ({ content }) => {
    const getGenreName = (genreId) => {
        const genreMap = {
            28: '액션',
            12: '모험',
            16: '애니메이션',
            35: '코미디',
            80: '범죄',
            99: '다큐멘터리',
            18: '드라마',
            10751: '가족',
            14: '판타지',
            36: '역사',
            27: '공포',
            10402: '음악',
            9648: '미스터리',
            10749: '로맨스',
            878: 'SF',
            10770: 'TV 영화',
            53: '스릴러',
            10752: '전쟁',
            37: '서부',
        };
        return genreMap[genreId] || '기타';
    };

    return (
        <OnlyContainer>
            {content?.map((item, index) => (
                <Container key={item.id}>
                    <Poster src={`https://image.tmdb.org/t/p/original${item.posterPath}`} alt={item.title} />
                    <InfoSection>
                        <Flex $alignItems='flex-end' $gap='30px' $padding='20px 0'>
                            <Label>{index + 2}</Label>
                            <Title>{item.title}</Title>
                        </Flex>
                        <Tags>
                            <Tag>{item.releaseYear}</Tag>
                            <Tag>{item.genres?.map((genreId) => getGenreName(genreId)).join(', ')}</Tag>
                            <Tag>{item.adult ? '청소년 관람불가' : '전체 관람가'}</Tag>
                        </Tags>
                        <Description>{item.overview}</Description>
                    </InfoSection>
                </Container>
            ))}
        </OnlyContainer>
    );
};

export default Only2;
