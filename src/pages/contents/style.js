import styled from 'styled-components';

export const GridContainer = styled.div`
    margin: 80px 0;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 60px;
    row-gap: 136px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(5, 1fr);
    }
`;

export const Title = styled.div`
    grid-column: span 2;
    color: var(--white);
    font-size: clamp(40px, 3.65vw, 70px);
    font-weight: 900;
    margin: 0;
`;

export const BadgeBlank = styled.div`
    border: 1px solid var(--primary-base);
    border-radius: 5px;
    font-size: 13px;
    font-weight: 700;
    padding: 2px 4px;
`;
