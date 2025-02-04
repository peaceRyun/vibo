import styled from 'styled-components';

export const Container = styled.div`
    width: 39.6875rem; /* 635px */
    height: 21.875rem; /* 350px */
    background-color: #000;
    padding: 1.875rem; /* 30px */
    display: flex;
    gap: 2rem;
    border-radius: 0.5rem;
`;

export const Poster = styled.img`
    width: 18.125rem; /* 290px */
    height: 18.125rem; /* 290px */
    object-fit: cover;
    border-radius: 0.5rem;
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.8rem;
    padding-top: 0.5rem;
`;

export const Title = styled.h2`
    font-size: 2.125rem; /* 34px */
    font-weight: 900; /* Pretendard Heavy */
    font-family: 'Pretendard', sans-serif;
    color: #fff;
    margin: 0;
`;

export const Tags = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Tag = styled.span`
    font-size: 1.0625rem; /* 17px */
    padding: 0.46875rem 0.625rem; /* 위아래 7.5px, 좌우 10px */
    height: 1.6875rem; /* 27px */
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    white-space: nowrap;
`;

export const Description = styled.p`
    font-size: 1.0625rem; /* 17px */
    color: #939598;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    margin: 0;
`;
