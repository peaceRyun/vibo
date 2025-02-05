import { Container, Poster, InfoSection, Title, Tags, Tag, Description } from './style';

const Only2 = () => {
    return (
        <Container>
            <Poster src="/mainhome/sample/Only2Sample.png" alt="영화 포스터" />
            <InfoSection>
                <Title>파묘</Title>
                <Tags>
                    <Tag>2025</Tag>
                    <Tag>미스터리</Tag>
                    <Tag>15세</Tag>
                </Tags>
                <Description>
                    미국 LA, 거액의 의뢰를 받은 무당 ‘화림’과 ‘봉길’은 기이한 병이 대물림되는 집안의 장손을 만난다.
                    조상의 묫자리가 화근임을 알아챈 ‘화림’은 이장을 ...
                </Description>
            </InfoSection>
        </Container>
    );
};

export default Only2;
