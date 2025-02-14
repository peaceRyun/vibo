import React from 'react';
import styled from 'styled-components';
import LiLikeButton from '../../../ui/lordicon/LiLikeButton';

const HoverItem = ({ content }) => {
    const { title, name, backdrop_path, overview } = content;

    return (
        <ItemWrap>
            <Flex $justifyCenter="center" $alignItems="center" $position="relative">
                <ItemImg src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title || name} />
                <button>
                    <PlayImg src="/contentdetail/ui/carousel_action_atomic.png" alt="play" />
                </button>
            </Flex>
            <Flex $flexDirection="column" $padding="15px 20px 6px" $gap="8px">
                <Flex $justifyContent="space-between" $alignItems="center">
                    <Flex $justifyContent="space-between" $alignItems="center" $gap="10px">
                        <img src="/contentdetail/contentrate/전체관람가 관람등급 1.png" alt="rateAll" />
                        <Badge $br="4px" $padding="3.5px 5px" fontSize="12px">
                            HD
                        </Badge>
                        <Span $fontSize="12px">2024</Span>
                    </Flex>
                    <LiLikeButton width="30px" height="30px" />
                </Flex>
                <H4 $textAlign="left" $fontSize="20px">
                    {title || name}
                </H4>
                <Contour />
            </Flex>
            <P $lineClamp="3">{overview}</P>
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

const ItemImg = styled.img`
    width: 100%;
    height: 50%;
`;

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
