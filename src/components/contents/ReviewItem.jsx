import styled from 'styled-components';
import { Flex } from './style';

const ReviewItem = ({ nickname, rating, content, date, imgurl }) => {
    return (
        <li style={{ marginLeft: '107px' }}>
            <Flex $gap='17px' $alignItems='center'>
                <img src={imgurl} alt='샘플프로필' style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <Flex $flexDirection='column' $position='relative' style={{ width: '100%' }}>
                    <Flex $gap='15px' $alignItems='center' $justifyContent='space-between'>
                        <Flex $gap='15px' $alignItems='center'>
                            <span>{nickname}</span>
                            <Flex $gap='5px' $alignItems='center'>
                                {Array(rating || 0)
                                    .fill()
                                    .map((_, index) => (
                                        <img key={index} src='/contentdetail/ui/StarActive.png' alt='별' />
                                    ))}
                            </Flex>
                        </Flex>
                        <span style={{ color: '#666', fontSize: '14px' }}>{date}</span>
                    </Flex>
                    <ContentP>{content}</ContentP>
                </Flex>
            </Flex>
        </li>
    );
};

export default ReviewItem;

export const ContentP = styled.p`
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;
