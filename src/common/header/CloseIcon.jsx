import React from 'react';
import { SearchIconContainer } from './style';
import { IoClose } from 'react-icons/io5';

const CloseIcon = ({ onClick }) => {
  return (
    <>
      <SearchIconContainer onClick={onClick}>
        <IoClose size={40} />
      </SearchIconContainer>
    </>
  );
};

export default CloseIcon;
