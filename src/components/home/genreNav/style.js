import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GenreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* gap: 1.5rem 10px; // gap 크기 줄이기 */
  /* pad ding: 60px 50px 60px 0;*/
  gap: clamp(1rem, 3vw, 0rem) 10px;
  /* 드래그방지 */
  user-select: none;
  pointer-events: auto;
  touch-action: pan-y;
  user-drag: none;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(1rem, 3vw, 3rem) 10px; */
  /* padding: 60px 20px 60px 0; */
  @media (min-width: 1026px) {
    padding: 60px 50px 60px 0;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(1rem, 2vw, 1rem) 10px;
    justify-items: center;
    padding: 40px 20px 40px 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
    justify-items: center;
    padding: 30px 20px 30px 0;
  }
`;

export const GenreItem = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'ishighlighted',
})`
  max-width: 1820px;
  /* width: clamp(150px, 30vw, 420px); */
  height: clamp(100px, 15vw, 139px);
  padding: 1rem;
  border: 2px solid #009c8c;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: border-color 0.3sease;
  background-color: black;
  /* width: clamp(200px, 40vw, 435px);
  height: clamp(120px, 20vw, 183px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border: 2px solid #009c8c;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: border-color 0.3s ease; */

  background-color: ${({ ishighlighted }) => (ishighlighted ? 'black' : 'black')};
  &:hover {
    background-color: #009c8c;
    color: #191919;
  }
  @media (max-width: 1024px) {
    width: 27.1875rem;
    height: 7.4375rem;
  }

  .en {
    font-size: 2rem;
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
    color: ${({ ishighlighted }) => (ishighlighted ? 'white' : 'white')};
    /* margin-top: 0.5rem; */
    @media (max-width: 1024px) {
      font-size: 17px;
    }
  }

  .GenreText {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    @media (max-width: 600px) {
      width: 100%;
      flex-direction: row;
      align-items: left;
      justify-content: space-around;
      margin-top: 5px;
    }
  }
  @media (max-width: 1024px) {
    width: clamp(180px, 45vw, 380px);
    /* height: clamp(100px, 18vw, 160px); */
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    padding: 10px;
    /* height: clamp(90px, 25vw, 140px); */
  }
`;
