// 라이브 홈
import React from 'react';
import LiveList from '../../../components/home/live/LiveList';

import { LiveContainer } from './style';

const LiveHome = () => {
  return (
    <LiveContainer>
      <LiveList />
    </LiveContainer>
  );
};

export default LiveHome;
