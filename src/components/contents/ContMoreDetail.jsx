import { Flex, FlexUl, H3, SpanInfo, SpanInfoDim } from './style';

const ContMoreDetail = ({ data, loading, contentType, contentRating }) => {
    if (loading) return <div>Loading...</div>;
    if (!data) return null;

    // 데이터 포맷팅
    const creators = data.created_by?.map((creator) => creator.name).join(', ') || '정보 없음';
    const cast = data.credits?.cast?.map((actor) => actor.name).join(', ') || '정보 없음';
    const genres = data.genres?.map((genre) => genre.name).join(', ') || '정보 없음';
    const keywords = data.keywords?.keywords?.map((k) => k.name).join(', ') || '정보 없음';
    const title = contentType === 'series' ? data.name : data.title;

    // 관람등급 처리
    const certification = contentRating?.rating || '정보 없음';

    return (
        <section>
            <Flex $flexDirection='column' $position='relative' $gap='15px' $mb='100px' $padding='0 0 100px'>
                <H3>{title} 상세 정보</H3>
                <FlexUl $flexDirection='column' $gap='5px'>
                    {contentType === 'series' && (
                        <li>
                            <SpanInfoDim>크리에이터: </SpanInfoDim>
                            <SpanInfo>{creators}</SpanInfo>
                        </li>
                    )}
                    <li>
                        <SpanInfoDim>출연: </SpanInfoDim>
                        <SpanInfo>{cast}</SpanInfo>
                    </li>
                    <li>
                        <SpanInfoDim>장르: </SpanInfoDim>
                        <SpanInfo>{genres}</SpanInfo>
                    </li>
                    <li>
                        <SpanInfoDim>{contentType === 'series' ? '시리즈 특징' : '영화 특징'}: </SpanInfoDim>
                        <SpanInfo>{keywords}</SpanInfo>
                    </li>
                    <li>
                        <SpanInfoDim>관람등급: </SpanInfoDim>
                        <SpanInfo>{certification}세 이용가</SpanInfo>
                    </li>
                </FlexUl>
            </Flex>
        </section>
    );
};

export default ContMoreDetail;
