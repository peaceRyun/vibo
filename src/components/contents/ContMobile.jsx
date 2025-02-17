import React, { useEffect, useState } from 'react';
import {
  ButtonContainer,
  Content,
  ContMobileContainer,
  Description,
  DownloadButton,
  EpisodeInfo,
  Flex,
  Header,
  IconSection,
  LikeIcon,
  PlayBar,
  PlayMobileButton,
  ProgressBar,
  RatingIcon,
  SaveButton,
  SeasonInfo,
  ShareIcon,
  TimeRemaining,
} from './style';
import { FaPlay } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
const ContMobile = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 50) {
        setProgress((prev) => prev + 1); // 1초마다 1%씩 증가
      }
    }, 100);
    return () => clearInterval(interval);
  }, [progress]);
  return (
    <div>
      <>
        <ContMobileContainer>
          <Header>
            <SeasonInfo>2024년 15 FHD</SeasonInfo>
            <EpisodeInfo>시즌 1: 13화 | 2025.01.02</EpisodeInfo>
            <PlayBar>
              <ProgressBar value={progress} max="100" />
              <TimeRemaining>10분 남음</TimeRemaining>
            </PlayBar>
          </Header>
          <ButtonContainer>
            <PlayMobileButton>
              <FaPlay size={20} />
              재생
            </PlayMobileButton>

            <SaveButton>
              <FiDownload size={25} />
              저장
            </SaveButton>
          </ButtonContainer>
          <Content>
            <Description>
              <h4>
                태영(임지연)이 구더기가 들릴 없다고 확신하는 소혜(하을리)는 청수현 여기에저기를 들으시고 다닌다. 정체가
                탄로 날 위기에 처한 태영...
              </h4>
              <div>
                <p>
                  출연 : 임지연, 추영우, 김재원...<span>더보기</span>
                </p>
                <p>크리에이터 : 진혁, 박지숙</p>
              </div>
            </Description>
            <IconSection>
              <LikeIcon>
                {' '}
                <img src="/contentdetail/ui/하트active.png" alt="하트" />
                좋아요
              </LikeIcon>
              <RatingIcon>
                3/5 <p>평점</p>
              </RatingIcon>
              <ShareIcon>공유</ShareIcon>
              <DownloadButton>
                <FiDownload size={25} />
                전체 화차 다운로드
              </DownloadButton>
            </IconSection>
          </Content>
        </ContMobileContainer>
      </>
    </div>
  );
};

export default ContMobile;
