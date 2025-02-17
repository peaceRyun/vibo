import React, { useEffect, useState } from 'react';
import Only1 from './only1/Only1';
import Only2 from './only2/Only2';
import MobileOnly from './MobileOnly';
import { Title, Underline2, ViboContainer } from './style';

const ViboOnly = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Title>
        <h3>VIBO TOP 5</h3>
        <Underline2 />
      </Title>

      {isMobile ? (
        <MobileOnly />
      ) : (
        <ViboContainer>
          <Only1 />
          <Only2 />
        </ViboContainer>
      )}
    </>
  );
};

export default ViboOnly;

{
  /* <>
//   <Title>
//     <h3>VIBO TOP 5</h3>
//     <Underline2 />
//   </Title>

//   <ViboContainer>
//     <Only1 />
//     <Only2 />
//   </ViboContainer>
// </> */
}
