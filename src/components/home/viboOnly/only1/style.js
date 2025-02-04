import styled from 'styled-components';

export const Container = styled.div`
    width: 34.375rem;
    height: 41.875rem;
    background-color: #000;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Poster = styled.img`
    width: 31.5rem;
    height: 25.125rem;
    object-fit: cover;
    border-radius: 0.5rem;
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Title = styled.h2`
    font-size: 2.125rem;
    font-weight: 900;
    color: #fff;
`;

export const Tags = styled.div`
    display: flex;
    gap: 0.5rem;
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
    font-size: 1.25rem; /* 20px */
    color: #939598;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 최대 3줄 */
    -webkit-box-orient: vertical;
`;
