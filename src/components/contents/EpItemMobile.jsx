// 에피소드 정보
import { FiDownload } from 'react-icons/fi';
import { EpItemContImg, EpMobileText, EpMobileTitle, Flex, H4, P, Span } from './style';
import { useState } from 'react';

// 시리즈 한정 에피소드
const EpItemMobile = () => {
  return (
    <li>
      <Flex>
        <EpItemContImg
          $width="225px"
          $height="137px"
          src="/contentdetail/sample/EpItemImgSample.png"
          alt="에피회차별썸네일샘플"
        />
        <EpMobileTitle>
          <EpMobileText>
            <H4 $fontSize="15px" $fontWeight="700">
              애인있어요
            </H4>
            <Span $fontSize="15px" $whiteSpace="nowrap">
              52분
            </Span>
          </EpMobileText>
          <FiDownload size={25} />
        </EpMobileTitle>
      </Flex>
      <P>
        아직도 넌 혼잔거니 물어오네요. 난 그저 웃어요. 사랑하고있죠. 사랑하는 사람 있어요. 그대는 내가 안쓰러운건가봐,
        좋은 사람있다며 한번 만나보라 말하죠. 그댄 모르죠, 내게도 멋진 애인이 있다는걸.
      </P>
    </li>
  );
};

export default EpItemMobile;
