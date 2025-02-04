// 마이페이지
import React from 'react';
import { Container } from '../../common/style';
import ProfileEdit from './ProfileEdit';
import ProfileSwitch from './ProfileSwitch';
import ProfileInfoEdit from './ProfileInfoEdit';

const Mypage = () => {
  return (
    <div>
      <Container />
      {/* <ProfileEdit />
      <ProfileSwitch /> */}
      <ProfileInfoEdit />
    </div>
  );
};

export default Mypage;
