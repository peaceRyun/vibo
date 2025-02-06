import Only1 from './only1/Only1';
import Only2 from './only2/Only2';
import { ViboContainer } from './style';
// import { ViboCard, ViboContainer } from './style';

const ViboOnly = () => {
  return (
    <>
      <ViboContainer>
        <Only1 />

        <Only2 />
      </ViboContainer>
    </>
  );
};

export default ViboOnly;
