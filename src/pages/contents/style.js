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

export const H2 = styled.h2`
    grid-column: span 2;
    color: var(--white);
    font-size: var(--display-medium-size);
    font-weight: 900;
    margin: 0;
`;
