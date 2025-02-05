import styled from 'styled-components';

export const RateItemContainer = styled.div`
    width: 16rem;
    height: 23rem;
    border-radius: 1.25rem;
    overflow: hidden;
    position: relative;
    background-color: #000;
    box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.4);

    @media (max-width: 768px) {
        width: 12rem;
        height: 17.5rem;
        border-radius: 1rem;
    }
`;

export const RateItemImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
