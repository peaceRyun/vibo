import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    padding: 0 var(--spacing-5);
    @media (min-width: 1025px) {
        padding: 0 50px;
    }
`;

export const Inner = styled.div`
    margin: 0 auto;
    @media (min-width: 1025px) {
        max-width: 1820px;
    }
`;
