import styled from 'styled-components';

export const GenreContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem 10px;
    width: 1740px;
`;

export const GenreItem = styled.div`
    width: 27.1875rem;
    height: 11.4375rem; /* 183px */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    border: 2px solid transparent;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;

    .en {
        font-size: 2.5rem;
        font-weight: 700;
        background: linear-gradient(to bottom, #ffffff, #888888);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
    }

    .ko {
        font-size: 1.5rem;
        color: ${({ isHighlighted }) => (isHighlighted ? '#005B53' : '#939598')};
        margin-top: 0.5rem;
    }
`;
