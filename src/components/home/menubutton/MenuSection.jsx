import React from 'react';
import MenuButton from './MenuButton';
import { ButtonContainer, Section, Title, Underline } from './style';

const MenuSection = () => {
  return (
    <>
      <Section>
        <Title>
          <h2>지금, 다채로운 콘텐츠를 VIBO에서 찾아보세요.</h2>
          <Underline />
        </Title>
        <ButtonContainer>
          <MenuButton text="Series" />
          <MenuButton text="Movie" />
          <MenuButton text="LIVE" />
          <MenuButton text="VIBO PLUS" />
        </ButtonContainer>
      </Section>
    </>
  );
};

export default MenuSection;
