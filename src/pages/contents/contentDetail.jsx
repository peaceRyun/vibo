import { Container } from '../../common/style';
import EpList from '../../components/contents/EpList';
import PlayBanner from '../../components/contents/PlayBanner';
import ReList from '../../components/contents/ReList';
import { FlexCol, FlexColUl, H3, SpanInfo, SpanInfoDim } from '../../components/contents/style';

// 콘텐츠 상세
const ContentDetail = () => {
    return (
        <>
            <Container>
                <FlexCol gap='30px'>
                    <PlayBanner />
                    <FlexCol gap='15px'>
                        <span>2024년</span>
                        <div>
                            <img src='/contentdetail/contentrate/전체관람가 관람등급 1.png' alt='rateAll' />
                        </div>
                        <span>13화</span>
                        <p>
                            태영(임지연)이 구덕이가 틀림없다고 확신하는 소혜(하율리)는 청수현 여기저기를 들쑤시고
                            다닌다. 정체가 탄로 날 위기에 처한 태영...
                        </p>
                    </FlexCol>
                    <EpList />
                    <ReList />
                    <FlexCol gap='15px'>
                        <H3>옥씨부인전 상세 정보</H3>
                        <FlexColUl gap='5px'>
                            <li>
                                <SpanInfoDim>크리에이터: </SpanInfoDim>
                                <SpanInfo>진혁, 박지숙</SpanInfo>
                            </li>
                            <li>
                                <SpanInfoDim>출연: </SpanInfoDim>
                                <SpanInfo>임지연, 추영우, 김재원, 연우, 이재원, 김재화, 오대환</SpanInfo>
                            </li>
                            <li>
                                <SpanInfoDim>장르: </SpanInfoDim>
                                <SpanInfo>로멘스, 한국</SpanInfo>
                            </li>
                            <li>
                                <SpanInfoDim>시리즈 특징: </SpanInfoDim>
                                <SpanInfo>로멘틱, 법정 시리즈, 시대물, </SpanInfo>
                            </li>
                            <li>
                                <SpanInfoDim>관람등급: </SpanInfoDim>
                                <SpanInfo>15세이상 관람가</SpanInfo>
                            </li>
                        </FlexColUl>
                    </FlexCol>
                </FlexCol>
            </Container>
        </>
    );
};

export default ContentDetail;
