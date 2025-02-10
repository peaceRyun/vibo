import styled from 'styled-components';

export const GenreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 81.6px;
  /* 4.063rem 3rem; */
  /* max-width: 1820px; */
`;

export const GenreItem = styled.div`
  width: 25.25rem; /* 404px */
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

  &.active {
    background-color: #009c8c;
    border-color: #009c8c;
  }

  &.border {
    border-color: #009c8c;
  }

  &:hover {
    border-color: #009c8c;
  }

  .en {
    font-size: 2.5rem; /* 40px */
    font-weight: 700;
    background: linear-gradient(to bottom, #ffffff, #888888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }

  .ko {
    font-size: 1.5rem; /* 24px */
    color: #939598;
    margin-top: 0.5rem;
  }

  &.active .en {
    background: linear-gradient(to bottom, #ffffff, #888888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &.active .ko {
    color: #005b53;
  }
`;
