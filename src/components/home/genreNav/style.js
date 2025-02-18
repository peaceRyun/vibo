import styled from 'styled-components';

export const GenreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 10px;

  width: 1740px;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    /* gap: 1rem 10px; */
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;
    /* gap: 1rem 10px; */
  }
`;

export const GenreItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'ishighlighted',
})`
  width: 27.1875rem;
  height: 11.4375rem; /* 183px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border: 2px solid #009c8c;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: border-color 0.3s ease;
  background-color: ${({ ishighlighted }) => (ishighlighted ? '#009c8c' : 'transparent')};
  @media (max-width: 1024px) {
    width: 27.1875rem;
    height: 7.4375rem;
  }
  .en {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(to bottom, #ffffff, #888888);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 24px;
    }
  }

  .ko {
    font-size: 1.5rem;
    color: ${({ ishighlighted }) => (ishighlighted ? '#005B53' : '#939598')};
    margin-top: 0.5rem;
    @media (max-width: 1024px) {
      font-size: 17px;
    }
  }
`;
