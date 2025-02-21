import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Flex } from './style';

const ReviewItem = ({ nickname, rating, content, date, imgurl }) => {
    const { srcNow } = useSelector((state) => state.profileR); // ✅ Redux에서 현재 유저 프로필 사진 가져오기

    return (
        <li style={{ marginLeft: '107px' }}>
            <Flex $gap='17px' $alignItems='center'>
                <img
                    src={
                        imgurl ||
                        srcNow ||
                        'https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/sample/SampleProfile.png'
                    } // ✅ Redux 프로필 적용
                    alt='프로필'
                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                />
                <Flex $flexDirection='column' $position='relative' style={{ width: '100%' }}>
                    <Flex $gap='15px' $alignItems='center' $justifyContent='space-between'>
                        <Flex $gap='15px' $alignItems='center'>
                            <span>{nickname}</span>
                            <Flex $gap='5px' $alignItems='center'>
                                {Array(rating || 0)
                                    .fill()
                                    .map((_, index) => (
                                        <img
                                            key={index}
                                            src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/StarActive.png'
                                            alt='별'
                                        />
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
