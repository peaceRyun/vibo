import { useState } from 'react';

import { TabButtonStyled, TabContainer } from './style';

const TabButton = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  // const tabs = ['국내영화', '미국영화', '영국영화', '일본영화', '대만영화'];
  // const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButtonStyled key={tab} $active={activeTab === tab} onClick={() => setActiveTab(tab)}>
          {tab}
        </TabButtonStyled>
      ))}
    </TabContainer>
  );
};

export default TabButton;
