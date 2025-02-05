import styled from 'styled-components';

export const GridContainer = styled.div`
    margin: 100px 0;
    padding: 20px;
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
