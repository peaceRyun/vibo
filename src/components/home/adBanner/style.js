import styled from 'styled-components';

export const BannerWrapper = styled.div`
    width: 100%;
    height: 28.6875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    @media (max-width: 768px) {
        height: 20rem;
    }

    @media (max-width: 480px) {
        height: 15rem;
    }
`;

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;
