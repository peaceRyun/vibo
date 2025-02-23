import styled from 'styled-components';
import { Container, Description, TipsContainer, TipsList, TipsTitle, Title } from './style';
import { IoSearchOutline } from 'react-icons/io5';

const StyledIcon = styled(IoSearchOutline)`
    width: 4rem;
    height: 4rem;
    color: var(--gray-200);
    background-color: var(--gray-800);
    border-radius: 50%;
    padding: 1rem;
    margin-bottom: 1rem;
`;

const NoSearchResults = ({ searchTerm }) => {
    return (
        <Container>
            <StyledIcon />
            <Title>
                '<span>{searchTerm}</span>' 에 대한 검색결과가 없습니다
            </Title>
            <Description>다른 검색어를 입력하시거나 철자와 띄어쓰기를 확인해 보세요</Description>
            <TipsContainer>
                <TipsTitle>검색 tip</TipsTitle>
                <TipsList>
                    <li>검색어의 철자가 정확한지 확인해 보세요</li>
                    <li>한글 또는 영어로 검색해 보세요</li>
                    <li>다른 검색어를 입력해 보세요</li>
                </TipsList>
            </TipsContainer>
        </Container>
    );
};

export default NoSearchResults;
