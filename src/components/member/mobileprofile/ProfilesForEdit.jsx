import { ButtonComplete, DimmedWrap, EditForm, Flex, H2, P, PageWrap, ProfileImg, ProfileImgWrap } from './style';
import { FaPen } from 'react-icons/fa';

const ProfilesForEdit = () => {
    return (
        <>
            <PageWrap>
                <EditForm>
                    <Flex $flexDirection='column' $alignItems='center' $gap='60px' $padding='90px'>
                        <Flex $flexDirection='column' $alignItems='center' $gap='10px'>
                            <H2>프로필 편집</H2>
                            <P $color='var(--gray-500)'>편집할 프로필을 선택해주세요</P>
                        </Flex>
                        <Flex $gap='20px' $flexDirection='column' $alignItems='center'>
                            <ProfileImgWrap $border='4px solid var(--white)' $borderRadius='5px'>
                                <ProfileImg
                                    $width='200px'
                                    $height='200px'
                                    src='/contentdetail/sample프아.png'
                                    alt='샘플프아'
                                />
                                <DimmedWrap>
                                    <FaPen size='40px' />
                                </DimmedWrap>
                            </ProfileImgWrap>
                            <P $fontSize='17px' $color='var(--gray-500)'>
                                닉네임1
                            </P>
                        </Flex>
                        <ButtonComplete
                            $padding='1.675rem'
                            $border='1px solid var(--gray-500)'
                            $borderRadius='5px'
                            $color='var(--black)'
                            $width='15.5rem'
                            $backgroundColor='var(--gray-300)'
                        >
                            완료
                        </ButtonComplete>
                    </Flex>
                </EditForm>
            </PageWrap>
        </>
    );
};

export default ProfilesForEdit;
