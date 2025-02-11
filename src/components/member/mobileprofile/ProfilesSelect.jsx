import { useNavigate } from 'react-router';
import { ButtonDark, EditForm, Flex, H2, P, PageWrap, ProfileImg, ProfileImgWrap } from './style';

const ProfilesSelect = () => {
    const navigate = useNavigate();
    const onGo = () => {
        navigate('/profilesforedit');
    };
    return (
        <>
            <PageWrap>
                <EditForm>
                    <Flex $flexDirection='column' $alignItems='center' $gap='60px' $padding='90px'>
                        <Flex $flexDirection='column' $alignItems='center' $gap='10px'>
                            <H2>프로필 선택</H2>
                            <P $color='var(--gray-500)'>선택할 프로필을 선택해주세요</P>
                        </Flex>
                        <Flex $gap='20px' $flexDirection='column' $alignItems='center'>
                            <ProfileImgWrap $border='4px solid var(--white)' $borderRadius='5px'>
                                <ProfileImg
                                    $width='200px'
                                    $height='200px'
                                    src='/contentdetail/sample프아.png'
                                    alt='샘플프아'
                                />
                            </ProfileImgWrap>
                            <P $fontSize='17px' $color='var(--gray-500)'>
                                닉네임1
                            </P>
                        </Flex>
                        <ButtonDark
                            $padding='1.675rem'
                            $border='1px solid var(--gray-500)'
                            $borderRadius='5px'
                            $color='var(--gray-300)'
                            $width='15.5rem'
                            onClick={onGo}
                        >
                            프로필 편집
                        </ButtonDark>
                    </Flex>
                </EditForm>
            </PageWrap>
        </>
    );
};

export default ProfilesSelect;
