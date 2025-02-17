// 비슷한 콘텐츠 모바일 버전 완전 달라서 따로 만들기

import { ContentCard, ContentWrapper, MReitemContainer } from './style';

const MobileReItem = () => {
  const contentList = [
    { title: '옥씨 부인전', image: '/contentdetail/sample/sample-contentlsit.png' },
    { title: '투주기', image: '/contentdetail/sample/sample-contentlsit.png' },
    { title: '너를 좋아해', image: '/contentdetail/sample/sample-contentlsit.png' },
  ];

  return (
    <MReitemContainer>
      {/* <h2>비슷한 콘텐츠</h2> */}
      <ContentWrapper>
        {contentList.map((content, index) => (
          <ContentCard key={index}>
            <img src={content.image} alt={content.title} />
            <p>{content.title}</p>
          </ContentCard>
        ))}
      </ContentWrapper>
    </MReitemContainer>
  );
};

export default MobileReItem;
