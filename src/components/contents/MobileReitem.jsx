import { useNavigate } from 'react-router';
import { ContentCard, ContentWrapper, MReitemContainer } from './style';

const MobileReItem = ({ recommendData, loading, contentType }) => {
    const fallbackImage =
        'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/sample-contentlsit.png';
    const navigate = useNavigate();

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

    const onGo = (id) => {
        navigate(`/detail/${contentType}/${id}`);
    };

    // ReList와 동일한 방식으로 데이터 확인
    if (!recommendData || recommendData.length === 0) {
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
                {recommendData.map((item) => (
                    <ContentCard key={item.id} onClick={() => onGo(item.id)}>
                        <img
                            src={
                                item.poster_path ? `https://image.tmdb.org/t/p/w780${item.poster_path}` : fallbackImage
                            }
                            alt={contentType === 'movie' ? item.title : item.name}
                            onError={handleImageError}
                        />
                    </ContentCard>
                ))}
            </ContentWrapper>
        </MReitemContainer>
    );
};

export default MobileReItem;
