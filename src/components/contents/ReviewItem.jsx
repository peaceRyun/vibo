import { Flex } from './style';

const ReviewItem = () => {
    return (
        <li style={{ marginLeft: '107px' }}>
            <Flex $gap='17px' $alignItems='center'>
                <img src='/contentdetail/sample/SampleProfile.png' alt='샘플프로필' />
                <Flex $flexDirection='column' $position='relative'>
                    <Flex $gap='15px' $alignItems='center'>
                        <span>닉네임</span>
                        <Flex $gap='5px' $alignItems='center'>
                            <img src='/contentdetail/ui/StarActive.png' alt='별' />
                            <img src='/contentdetail/ui/StarActive.png' alt='별' />
                            <img src='/contentdetail/ui/StarActive.png' alt='별' />
                            <img src='/contentdetail/ui/StarActive.png' alt='별' />
                        </Flex>
                    </Flex>
                    <p>댓글 내용</p>
                </Flex>
            </Flex>
        </li>
    );
};

export default ReviewItem;
