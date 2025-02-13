import { Flex } from './style';

const ReviewItem = ({ nickname, rating, content, date }) => {
    return (
        <li style={{ marginLeft: '107px' }}>
            <Flex $gap='17px' $alignItems='center'>
                <img src='/contentdetail/sample/SampleProfile.png' alt='샘플프로필' />
                <Flex $flexDirection='column' $position='relative' style={{ width: '100%' }}>
                    <Flex $gap='15px' $alignItems='center' $justifyContent='space-between'>
                        <Flex $gap='15px' $alignItems='center'>
                            <span>{nickname}</span>
                            <Flex $gap='5px' $alignItems='center'>
                                {Array(rating)
                                    .fill()
                                    .map((_, index) => (
                                        <img key={index} src='/contentdetail/ui/StarActive.png' alt='별' />
                                    ))}
                            </Flex>
                        </Flex>
                        <span style={{ color: '#666', fontSize: '14px' }}>{date}</span>
                    </Flex>
                    <p style={{ marginTop: '10px' }}>{content}</p>
                </Flex>
            </Flex>
        </li>
    );
};

export default ReviewItem;
