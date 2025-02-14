import { CommonItemContainer, CommonImg } from './style';

const CommonItem = ({ content }) => {
  const { poster_path } = content;
  return (
    <CommonItemContainer>
      {/* <CommonImg src="/mainhome/sample/commonSample.png" alt="환승연애" /> */}
      <CommonImg src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="환승연애" />
    </CommonItemContainer>
  );
};

export default CommonItem;
