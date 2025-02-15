import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 0 var(--spacing-5);
  @media (min-width: 1025px) {
    padding: 0 50px;
  }
`;
export const Inner = styled.div`
  margin: 0 auto;
  @media (max-width: 599px) {
    max-width: calc(390px - var(--spacing-8));
  }
  @media (min-width: 600px) {
    max-width: calc(var(--breakpoint-tablet) - var(--spacing-8));
  }
  @media (min-width: 1025px) {
    max-width: calc(var(--breakpoint-desktop) - 100px);
  }
`;

export const PBWrap = styled.div`
  margin-top: 100px;
  max-width: 1820px;
  width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  overflow: hidden;

  @media (max-width: 590px) {
    margin-top: 50px;
    max-width: 100%;
  }
`;

// 16:9 비율을 유지하기 위한 새로운 wrapper 컴포넌트
export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 비율 */
  height: 0;
`;

export const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const GradientLayer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(25, 25, 25, 0.8) 75%, #191919 100%);

  @media (max-width: 590px) {
    height: 80%;
  }
`;

export const PBuiWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90%;
  margin: 0px 50px 63px;
`;

export const ItemWrap = styled.div`
  width: 100%;
  max-width: 394px;
  height: 367px;
  background-color: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 590px) {
    max-width: 320px;
    height: 300px;
  }
`;

export const SDrop = styled.div`
  width: 130px;
  height: 48px;
  border: 1px solid var(--primary-base);
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  gap: 10px;
  margin-right: 150px;

  @media (max-width: 590px) {
    width: 100px;
    padding: 0 20px;
    /* margin-right: 0; */
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 221px;
`;

export const PlayImg = styled.img`
  position: absolute;
  width: 67.5px !important;
  height: 67.5px !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LikeImg = styled.img`
  width: 34px;
  height: 29px;
`;

export const CRatingImg = styled.img`
  width: 34px;
  height: 34px;
`;

export const FlexUl = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => props.$gap};
  padding: ${(props) => (props.$padding ? props.$padding : '')};
  position: ${(props) => props.$position};
  width: ${(props) => props.$width || 'auto'};

  @media (max-width: 590px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Badge = styled.div`
  border-radius: ${(props) => props.$br};
  border: 1px solid var(--primary-base);
  color: var(--primary-base);
  background-color: var(--gray-900);
  padding: ${(props) => props.$padding};
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
`;

export const Span = styled.span`
  font-weight: ${(props) => props.$fontWeight};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '12px')};
  padding: ${(props) => props.$padding};
  white-space: ${(props) => props.$whiteSpace};
`;

export const SpanInfoDim = styled.span`
  font-size: 24px;
  color: var(--gray-600);
`;

export const SpanInfo = styled.span`
  font-size: 24px;
  color: var(--white);
`;

export const Contour = styled.div`
  margin: 5px 0 10px;
  height: 1px;
  background-color: var(--secondary-base);
`;

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 100%;
`;

export const H3 = styled.h3`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '28px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '800')};
`;

export const H4 = styled.h4`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '28px')};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : '800')};
  text-align: ${(props) => props.$textAlign};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: calc(200px * 0.08); /* 컨테이너 너비의 8% */
`;

export const P = styled.p`
  padding: ${(props) => (props.$padding ? props.$padding : '7px 20px 0px')};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : '13px')};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : '400')};
  text-align: start;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.$lineClamp}; /* 원하는 줄 수 */
  overflow: hidden;
`;

export const P28 = styled.p`
  font-size: 28px;
  font-weight: 400;
  text-align: start;
`;

export const P20 = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: start;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: var(--gray-900);
  padding: var(--spacing-6) var(--spacing-9);
  border-radius: 10px;
  width: 518px;
  height: 441px;
  border: 2px solid var(--primary-base);
`;

export const LoadMoreBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LoadMoreBtn = styled.button`
  background: #1d1d1d;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 2;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: var(--secondary-300);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;
export const EpItemContImg = styled.img`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  @media (max-width: 590px) {
    width: 120px; /* 📌 기존 150px에서 더 줄이기 */
    height: 80px;
  }
  /* @media (max-width: 590px) {
    width: ${(props) => props.$mobileWidth || '150px'};
    height: ${(props) => props.$mobileHeight || '90px'};
  } */
`;

export const EpListBgi = styled.img`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  position: ${(props) => props.$position};
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  transform: ${(props) => props.$transform};
  z-index: ${(props) => props.$zIndex};
`;

export const EpItemsWrap = styled.div`
  position: relative;
  overflow: hidden;
  // 초기 높이를 auto로 설정
  height: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

// 반응형
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 590px) {
    margin-top: 20px;
  }
  /* @media (max-width: 590px) {
    flex-direction: column-reverse; /* 모바일에서 순서 바꾸기 */
`;

export const PlayBannerWrapper = styled.div`
  width: 100%;

  &.mobile-only {
    display: none; // 기본적으로 숨김

    @media (max-width: 590px) {
      margin-top: 0;
      height: auto;
      /* display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 10; */
    }
  }

  &.pc-only {
    display: block;

    @media (max-width: 590px) {
      display: none;
    }
  }
`;
export const PageWrapper = styled.div`
  width: 100%;
  padding: 20px;

  @media (max-width: 590px) {
    padding: 10px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => props.$gap};
  padding: ${(props) => (props.$padding ? props.$padding : '')};
  position: ${(props) => props.$position};
  width: ${(props) => props.$width || 'auto'};
  border-top: ${(props) => props.$borderTop};
  white-space: ${(props) => props.$whiteSpace};
  font-size: ${(props) => props.$fontSize};
  /* 반응형추가 */
  @media (max-width: 590px) {
    flex-direction: column;
    gap: ${(props) => props.$mobileGap || '20px'};
    padding: ${(props) => props.$mobilePadding || '0 16px'};
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
  overflow: hidden;

  @media (max-width: 590px) {
    padding: 0 10px; /* 📌 모바일에서는 좌우 여백 추가 */
  }
`;
