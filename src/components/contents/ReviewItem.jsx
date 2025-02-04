import { Flex, FlexCol } from './style';

const ReviewItem = () => {
    return (
        <li style={{ marginLeft: '107px' }}>
            <Flex $gap='17px' $alignItems='center'>
                <img src='/contentdetail/sample/SampleProfile.png' alt='샘플프로필' />
                <FlexCol>
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
                </FlexCol>
            </Flex>
        </li>
    );
};

export default ReviewItem;
