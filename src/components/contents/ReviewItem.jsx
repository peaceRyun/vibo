import { FlexCol, FlexNone } from './style';

const ReviewItem = () => {
    return (
        <li style={{ marginLeft: '107px' }}>
            <FlexNone gap='17px'>
                <img src='/contentdetail/sample/SampleProfile.png' alt='샘플프로필' />
                <FlexCol>
                    <FlexNone gap='15px'>
                        <span>닉네임</span>
                        <FlexNone gap='5px'>
                            <img src='/contentdetail/ui/StarActive.png' alt='별' />
                            <img src='/contentdetail/ui/StarActive.png' alt='별' />
                            <img src='/contentdetail/ui/StarActive.png' alt='별' />
                            <img src='/contentdetail/ui/StarActive.png' alt='별' />
                        </FlexNone>
                    </FlexNone>
                    <p>댓글 내용</p>
                </FlexCol>
            </FlexNone>
        </li>
    );
};

export default ReviewItem;
