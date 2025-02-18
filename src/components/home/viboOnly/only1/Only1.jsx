import { Container, Poster, InfoSection, Title, Tags, Tag, Description, Flex, Label } from './style';

const Only1 = ({ content }) => {
  if (!content) return null;

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
    <Container>
      <Poster src={`https://image.tmdb.org/t/p/original${content.posterPath}`} alt={content.title} />
      <InfoSection>
        <Flex $alignItems="flex-end" $gap="20px" $padding="20px 0">
          <Label>1</Label>
          <Title>{content.title}</Title>
        </Flex>
        <Tags>
          <Tag>{content.releaseYear}</Tag>
          <Tag>{content.genres?.map((genreId) => getGenreName(genreId)).join(', ')}</Tag>
          <Tag>{content.adult ? '청소년 관람불가' : '전체 관람가'}</Tag>
        </Tags>
        <Description>{content.overview}</Description>
      </InfoSection>
    </Container>
  );
};

export default Only1;
