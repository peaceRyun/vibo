import { MainContainer } from '../../../pages/home/main/style';
import Only1 from './only1/Only1';
import Only2 from './only2/Only2';
import { Title, ViboContainer } from './style';
// import { ViboCard, ViboContainer } from './style';

const ViboOnly = () => {
  return (
    <>
      <Title>
        <h2>VIBO TOP 5</h2>
      </Title>
      <MainContainer>
        <ViboContainer>
          <Only1 />

          <Only2 />
        </ViboContainer>
      </MainContainer>
    </>
  );
};

export default ViboOnly;
