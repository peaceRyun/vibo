import React from 'react';
import { useState } from 'react';

const MenuButton = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { name, ongo } = item;
  return (
    <Button
      $isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={ongo}
    >
      {name}
    </Button>
  );
};

export default MenuButton;

import styled from 'styled-components';

const Button = styled.div`
  width: 18.75rem;
  height: 31.25rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: ${(props) =>
    props.$isHovered ? 'linear-gradient(to bottom, var( --primary-base), var(--black))' : '#333'};
  color: ${(props) => (props.$isHovered ? 'var(--white)' : 'var(--gray-700)')};
  @media (max-width: 1024px) {
    display: none;
  }
`;
