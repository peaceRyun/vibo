import { ContentCard, ContentWrapper, MReitemContainer } from './style';

const MobileReItem = ({ recommendData, loading, contentType }) => {
    const fallbackImage = '/contentdetail/sample/sample-contentlsit.png';

    // 이미지 로드 오류 처리 함수
    const handleImageError = (e) => {
        e.target.onerror = null; // 무한 루프 방지
        e.target.src = fallbackImage;
    };

    if (loading) {
        return (
            <MReitemContainer>
                <ContentWrapper>
                    <p>로딩 중...</p>
                </ContentWrapper>
            </MReitemContainer>
        );
    }

    // 데이터가 없을 경우 처리
    if (!recommendData?.results || recommendData.results.length === 0) {
        return (
            <MReitemContainer>
                <ContentWrapper>
                    <p>추천 콘텐츠가 없습니다.</p>
                </ContentWrapper>
            </MReitemContainer>
        );
    }

    return (
        <MReitemContainer>
            <ContentWrapper>
                {recommendData.results.slice(0, 6).map((item) => (
                    <ContentCard key={item.id}>
                        <img
                            src={
                                item.poster_path ? `https://image.tmdb.org/t/p/w200${item.poster_path}` : fallbackImage
                            }
                            alt={contentType === 'movie' ? item.title : item.name}
                            onError={handleImageError}
                        />
                        <p>{contentType === 'movie' ? item.title : item.name}</p>
                    </ContentCard>
                ))}
            </ContentWrapper>
        </MReitemContainer>
    );
};

export default MobileReItem;
