import styled from 'styled-components';

const WeeklyItem = ({ show }) => {
    if (!show) {
        return <EmptyItemContainer>콘텐츠 없음</EmptyItemContainer>;
    }

    const posterUrl = show.poster_path
        ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
        : '/mainhome/default_poster.webp';

    return (
        <WeeklyItemContainer>
            <WeeklyImg src={posterUrl} alt={show.name || '콘텐츠 이미지'} />
        </WeeklyItemContainer>
    );
};

export default WeeklyItem;

const WeeklyItemContainer = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    }
`;

const WeeklyImg = styled.img`
    width: 100%;
    height: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    transition: filter 0.3s;

    ${WeeklyItemContainer}:hover & {
        filter: brightness(0.7);
    }
`;

const EmptyItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #333;
    border-radius: 8px;
    height: 250px;
    color: #999;
    font-size: 0.9rem;
`;
