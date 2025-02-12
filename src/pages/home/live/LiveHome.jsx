// 라이브 홈
import React from 'react';
import LiveList from '../../../components/home/live/LiveList';

import { LiveContainer } from './style';
import { MainContent } from '../main/style';

const liveTitles = [
  { id: '1', title: '실시간 인기 LIVE' },
  { id: '2', title: '뉴스/시사/교양 채널' },
  { id: '3', title: '스포츠 채널' },
  { id: '4', title: '예능 채널' },
  { id: '5', title: '다큐 채널' },
];

const LiveHome = () => {
  return (
    <MainContent>
      <LiveContainer>
        {liveTitles.map((section) => (
          <LiveList key={section.id} title={section.title} />
        ))}
      </LiveContainer>
    </MainContent>
  );
};

export default LiveHome;
