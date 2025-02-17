import React, { useEffect, useState } from 'react';
import {
  ButtonContainer,
  Content,
  ContMobileContainer,
  Description,
  DownloadButton,
  EpisodeInfo,
  Flex,
  H2,
  Header,
  IconSection,
  LikeIcon,
  PBuiWrap,
  PlayBar,
  PlayMobileButton,
  ProgressBar,
  RatingIcon,
  RatingNumber,
  SaveButton,
  SeasonInfo,
  SeasonTitle,
  ShareIcon,
  TimeRemaining,
} from './style';
import { FaPlay } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { IoShareSocial } from 'react-icons/io5';
import MoreFilter from './MoreFilter';
import Button from '../../ui/button/Button';
import LiLikeButton from '../../ui/lordicon/LiLikeButton';
import { useDispatch, useSelector } from 'react-redux';
import { getTVDetail, getTVVideos } from '../../store/modules/getThunk';
import { useParams } from 'react-router';
const ContMobile = () => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();
  const tvDetail = useSelector((state) => state.tvDetailR.data);
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 50) {
        setProgress((prev) => prev + 1); // 1초마다 1%씩 증가
      }
    }, 100);
    return () => clearInterval(interval);
  }, [progress]);

  // TV 시리즈 정보와 비디오 정보 가져오기
  useEffect(() => {
    if (id) {
      dispatch(getTVDetail(id));
      dispatch(getTVVideos(id));
    }
  }, [dispatch, id]);

  // const handleExpandClick = () => {
  //   setIsExpanded(!isExpanded);
  // };

  return (
    <div>
      <>
        <ContMobileContainer>
          <Header>
            {/* test */}
            {/* <PBuiWrap></PBuiWrap> */}
            <SeasonTitle>{tvDetail?.name || '제목 로딩 중...'}</SeasonTitle>
            <SeasonInfo>2024년 전체 FHD</SeasonInfo>
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
                  출연 : 임지연, 추영우, 김재원...
                  {/* morefilter가 클릭하면 보여야하는데 왜 안됨..? */}
                  <button
                    onClick={() => {
                      <MoreFilter />;
                    }}
                  >
                    더보기
                  </button>
                </p>
                <p>크리에이터 : 진혁, 박지숙</p>
              </div>
            </Description>
            <IconSection>
              <LikeIcon>
                <img src="/contentdetail/ui/하트active.png" alt="하트" />
                <p>좋아요</p>
              </LikeIcon>
              <RatingIcon>
                <RatingNumber>
                  <h2>3</h2>
                  <span>/5</span>
                </RatingNumber>
                <p>평점</p>
              </RatingIcon>
              <ShareIcon>
                <IoShareSocial size={30} />
                <p>공유</p>
              </ShareIcon>
              <DownloadButton>
                <FiDownload size={30} />
                <p>
                  전체 회차 <br /> 다운로드
                </p>
              </DownloadButton>
            </IconSection>
          </Content>
        </ContMobileContainer>
      </>
    </div>
  );
};

export default ContMobile;

//      {/* <img src="/contentdetail/contentrate/전체관람가 관람등급 1.png" alt="하트" /> FHD */}
