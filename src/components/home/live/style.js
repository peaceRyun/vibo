import styled, { css } from 'styled-components';

const responsiveFont = css`
  font-size: ${(props) => props.fontSize || '17px'};
  color: ${(props) => props.color || 'inherit'};
  margin: ${(props) => props.margin || '0'};
  opacity: ${(props) => props.opacity || '1'};
  overflow-wrap: anywhere;

  @media (max-width: 1024px) {
    font-size: ${(props) => props.mobileFontSize || '17px'};
  }
  @media (max-width: 600px) {
    font-size: ${(props) => props.mobileFontSize || '17px'};
  }
`;

export const CardContainer = styled.div`
  width: ${(props) => props.width || '449px'};
  height: ${(props) => props.height || '258px'};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.borderRadius || '10px'};
  /* margin-right: 40px;
  margin-top: 20px; */
  margin: 20px 30px 0 10px;

  &:hover {
    transform: scale(1.05);
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); */
  }

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const CardImage = styled.img`
  width: ${(props) => props.width || '449px'};
  height: ${(props) => props.height || '188px'};
  object-fit: ${(props) => props.objectFit || 'cover'};
  border-radius: ${(props) => props.borderRadius || '10px 10px 0 0'};

  @media (max-width: 1024px) {
    height: ${(props) => props.mobileHeight || '200px'};
  }
  @media (max-width: 600px) {
    height: ${(props) => props.mobileHeight || '180px'};
  }
`;

export const CardInfo = styled.div`
  width: ${(props) => props.width || '449px'};
  height: ${(props) => props.height || '70px'};
  position: absolute;
  bottom: 0;
  /* position: relative; */
  background: ${(props) => props.bgColor || '#191919'};
  color: ${(props) => props.textColor || 'white'};
  padding: ${(props) => props.padding || '12px 20px 16px 20px'};
  box-sizing: border-box;
  overflow: hidden;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: anywhere;
  text-align: left;

  @media (max-width: 1024px) {
    padding: ${(props) => props.mobilePadding || '12px 16px'};
  }
  @media (max-width: 600px) {
    padding: ${(props) => props.mobilePadding || '8px 14px'};
  }
`;

export const CardTitle = styled.h3`
  ${responsiveFont}
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardBcName = styled.p`
  ${responsiveFont}
  font-size: 14px;
  color: var(--gray-500);
`;

//

export const IframeWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 0.5rem;
  overflow: hidden;
  background: black;
  /* width: 100%;
    height: 100%;
    position: relative;
    border-radius: .5rem;
    overflow: hidden;
    background: black; */
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 70%;
  /* height: 100%; */
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const BadgeLive = styled.div`
  width: 50px;
  font-size: 0.75rem;
  padding: 1px 7px;
  background-color: red;
  /* border: 3px solid red; */
  color: white;
  border-radius: 0.3125rem;
  position: absolute;
  top: 0.625rem;
  left: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  text-shadow: gray 1px 1px 1px;
`;
