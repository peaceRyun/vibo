import { Flex, FlexUl, H3, SpanInfo, SpanInfoDim } from './style';

const ContMoreDetail = () => {
    return (
        <>
            <section>
                <Flex $flexDirection='column' $position='relative' $gap='15px' $mb='100px' $padding='0 0 100px'>
                    <H3>옥씨부인전 상세 정보</H3>
                    <FlexUl $flexDirection='column' $gap='5px'>
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
                    </FlexUl>
                </Flex>
            </section>
        </>
    );
};

export default ContMoreDetail;
