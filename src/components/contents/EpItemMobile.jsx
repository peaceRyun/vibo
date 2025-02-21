// 에피소드 정보
import { FiDownload } from 'react-icons/fi';
import { EpItemContImg, EpMobileList, EpMobileText, EpMobileTitle, Flex, H4, P, Span } from './style';
import { IoIosPlayCircle } from 'react-icons/io';
import { FaRegCirclePlay } from 'react-icons/fa6';

// 시리즈 한정 에피소드
const EpItemMobile = ({ number }) => {
    return (
        <li>
            <Flex>
                <EpItemContImg
                    $width='225px'
                    $height='137px'
                    src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/EpItemImgSample.png'
                    alt='에피회차별썸네일샘플'
                />
                <EpMobileTitle>
                    <EpMobileText>
                        <EpMobileList>
                            <span>{number}</span>
                            <H4 $fontSize='15px' $fontWeight='700'>
                                {/* 숫자 추가 해야함. 시즌 1 이거 */}
                                애인있어요
                            </H4>
                        </EpMobileList>
                        <Span $fontSize='15px' $whiteSpace='nowrap'>
                            52분
                        </Span>
                    </EpMobileText>
                    <FaRegCirclePlay size={30} />
                    {/* <FiDownload size={25} /> */}
                </EpMobileTitle>
            </Flex>
            <P>
                아직도 넌 혼잔거니 물어오네요. 난 그저 웃어요. 사랑하고있죠. 사랑하는 사람 있어요. 그대는 내가
                안쓰러운건가봐, 좋은 사람있다며 한번 만나보라 말하죠. 그댄 모르죠, 내게도 멋진 애인이 있다는걸.
            </P>
        </li>
    );
};

export default EpItemMobile;
