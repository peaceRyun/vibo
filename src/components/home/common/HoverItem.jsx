import React, { useRef, useMemo } from 'react';
import styled from 'styled-components';
import LiLikeButton from '../../../ui/lordicon/LiLikeButton';

// 비디오 타입별 배열
const videosByType = {
    drama: [
        'drama/Ravers_Refreshing_Makeup_In_Smoky_Neon_Lit_Club_Restroom_fhd_2662826.mp4',
        'drama/Couple_Walking_With_Children_On_Mountain_fhd_1284450.mp4',
        'drama/Hippie_Man_Caressing_Girlfriends_Face_With_Wildflower_fhd_3084631.mp4',
        'drama/Men_Play_Street_Basketball_fhd_1789251.mp4',
        'drama/Ravers_Refreshing_Makeup_In_Smoky_Neon_Lit_Club_Restroom_fhd_2662826.mp4',
        'drama/Romantic_Couple_On_The_Beach_fhd_1117955.mp4',
        'drama/Rural_Female_Jogger_At_Sunrise_fhd_630313.mp4',
        'drama/The_Couple_Was_Playing_Together_On_The_Bus_fhd_2580005.mp4',
        'drama/Woman_In_A_Bikini_Relaxing_By_The_Poolside_In_A_Luxury_Designer_Villa_fhd_2615539.mp4',
    ],
    horror: [
        'horror/Bloody_Hand_Scratching_Glass_..._fhd_749917.mp4',
        'horror/Man_Walking_In_Alley_At_Night_fhd_847692.mp4',
        'horror/Moon_In_The_Dark_Sky_And_Clouds_At_Night_fhd_2077005.mp4',
        'horror/Nightmare_Demon_fhd_2896999.mp4',
        'horror/Scary_Doll_In_An_Abandoned_Kindergarten_fhd_1036161.mp4',
        'horror/Scary_Mask_fhd_295179.mp4',
        'horror/Scary_Static_On_Old_TV_fhd_184865.mp4',
        'horror/Woman_s_Face_Screams_From_Inside_A_Wall_fhd_1234782.mp4',
    ],
    thriller: [
        'thriller/A_Man_Walks_In_Forest_Holding_An_Axe_fhd_1348403.mp4',
        'thriller/Alone_Woman_In_A_Parking_Lot_fhd_2833198.mp4',
        'thriller/Body_Of_Murder_Victim_And_Bloody_Knife_At_Crime_Scene_fhd_2783148.mp4',
        'thriller/Girl_Pulling_Gum_Out_Of_Her_Mouth_fhd_2715214.mp4',
        'thriller/Hands_Dangle_From_The_Door_Of_A_Retro_Car_fhd_2618950.mp4',
        'thriller/Smoking_A_Cigarette_fhd_1077541.mp4',
        'thriller/Teens_Applying_Lipstick_fhd_1123717.mp4',
        'thriller/Victim_Being_Strangled_By_Murderer_With_Head_Wrapped_In_Plastic_fhd_2437476.mp4',
        'thriller/Woman_Holding_Umbrella_At_Winter_fhd_2158738.mp4',
        'thriller/Woman_Sinks_To_The_Bottom_fhd_1067263.mp4',
        'thriller/Young_Woman_Jumps_From_A_Boat_Into_Sea_fhd_1274692.mp4',
        'thriller/Zombie_Woman_Walking_Through_The..._fhd_729660.mp4',
    ],
};

const HoverItem = ({ content, videoType = 'drama' }) => {
    const { title, name, backdrop_path, overview } = content;
    const videoRef = useRef(null);

    // 비디오 타입에 맞는 배열에서 랜덤으로 선택
    const randomVideoSrc = useMemo(() => {
        // 유효한 비디오 타입인지 확인하고, 아니면 기본값 사용
        const videos = videosByType[videoType] || videosByType.drama;
        const randomIndex = Math.floor(Math.random() * videos.length);
        return `https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/videos/${videos[randomIndex]}`;
    }, [videoType]);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <ItemWrap onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Flex $justifyCenter='center' $alignItems='center' $position='relative'>
                <ItemImg
                    src={
                        backdrop_path
                            ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                            : '/mainhome/sample/commonSample.png'
                    }
                    alt={title || name}
                />

                <Video ref={videoRef} muted loop playsInline>
                    <source src={randomVideoSrc} type='video/mp4' />
                    Your browser does not support the video tag.
                </Video>

                <button>
                    <PlayImg
                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/carousel_action_atomic.png'
                        alt='play'
                    />
                </button>
            </Flex>
            <Flex $flexDirection='column' $padding='35px 20px 6px' $gap='8px'>
                <Flex $justifyContent='space-between' $alignItems='center'>
                    <Flex $justifyContent='space-between' $alignItems='center' $gap='10px'>
                        <img
                            src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/contentrate/전체관람가 관람등급 1.png'
                            alt='rateAll'
                        />
                        <Badge $br='4px' $padding='3.5px 5px' fontSize='12px'>
                            HD
                        </Badge>
                        <Span $fontSize='12px'>2024</Span>
                    </Flex>
                    <LiLikeButton width='30px' height='30px' />
                </Flex>
                <H4 $textAlign='left' $fontSize='20px'>
                    {title || name}
                </H4>
                <Contour />
            </Flex>
            <P $lineClamp='3'>{overview}</P>
        </ItemWrap>
    );
};

export default HoverItem;

// 스타일드 컴포넌트 정의
const ItemWrap = styled.div`
    width: 100%;
    max-width: 394px;
    height: 100%;
    background-color: var(--gray-800);
    border-radius: 8px;
    overflow: hidden;
    margin: 0 auto;
`;
const Video = styled.video`
    position: absolute; /* ✅ 기본 이미지 위에 배치 */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover; /* ✅ 영상이 부모 요소를 꽉 채우도록 설정 */
    opacity: 0; /* ✅ 기본적으로 숨김 */
    transition: opacity 0.3s ease-in-out; /* ✅ 부드러운 전환 효과 */

    /* ✅ 마우스 호버 시 영상이 나타남 */
    ${ItemWrap}:hover & {
        opacity: 1;
    }
`;

const ItemImg = styled.img`
    width: 100%;
    height: 50%;
`;

// 동영상 애 클릭시 움직이도록하는 이미지임
const PlayImg = styled.img`
    position: absolute;
    width: 67.5px !important;
    height: 67.5px !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Flex = styled.div`
    display: flex;
    flex-direction: ${(props) => props.$flexDirection};
    align-items: ${(props) => props.$alignItems};
    justify-content: ${(props) => props.$justifyContent};
    gap: ${(props) => props.$gap};
    padding: ${(props) => props.$padding || '0'};
    position: ${(props) => props.$position};
    width: ${(props) => props.$width || 'auto'};
`;

const Badge = styled.div`
    border-radius: ${(props) => props.$br};
    border: 1px solid var(--primary-base);
    color: var(--primary-base);
    background-color: var(--gray-900);
    padding: ${(props) => props.$padding};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: ${(props) => props.fontSize};
`;

const Span = styled.span`
    font-size: ${(props) => props.$fontSize || '12px'};
    padding: ${(props) => props.$padding || '0'};
`;

const Contour = styled.div`
    margin: 5px 0 10px;
    height: 1px;
    background-color: var(--secondary-base);
`;

const H4 = styled.h4`
    font-size: ${(props) => props.$fontSize || '20px'};
    font-weight: 800;
    text-align: ${(props) => props.$textAlign || 'left'};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const P = styled.p`
    padding: ${(props) => props.$padding || '7px 20px 0px'};
    font-size: ${(props) => props.$fontSize || '13px'};
    font-weight: 400;
    text-align: start;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${(props) => props.$lineClamp || '3'};
    overflow: hidden;
`;
