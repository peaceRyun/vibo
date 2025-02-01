import { Container } from '../../common/style';
import EpList from '../../components/contents/EpList';
import PlayBanner from '../../components/contents/PlayBanner';
import ReList from '../../components/contents/ReList';

// 콘텐츠 상세
const ContentDetail = () => {
    return (
        <>
            <Container>
                <PlayBanner />
                <EpList />
                <ReList />
            </Container>
        </>
    );
};

export default ContentDetail;
