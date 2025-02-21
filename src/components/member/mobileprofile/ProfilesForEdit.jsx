import { useNavigate } from 'react-router';
import { ButtonLight, DimmedWrap, EditForm, Flex, H2, P, PageWrap, ProfileImg, ProfileImgWrap } from './style';
import { FaPen } from 'react-icons/fa';

const ProfilesForEdit = () => {
    const navigate = useNavigate();

    const onGo = () => {
        localStorage.setItem('profileEditBackUrl', '/profilesforedit');
        navigate('/profileforedit');
    };

    const onGoComplete = () => {
        navigate('/profileselect');
    };

    return (
        <>
            <PageWrap>
                <EditForm>
                    <Flex $flexDirection='column' $alignItems='center' $gap='60px' $padding='90px'>
                        <Flex $flexDirection='column' $alignItems='center' $gap='10px'>
                            <H2>프로필 편집</H2>
                            <P $color='var(--gray-500)'>편집할 프로필을 선택해주세요</P>
                        </Flex>
                        <Flex $gap='15px' $alignItems='center'>
                            <Flex $gap='20px' $flexDirection='column' $alignItems='center'>
                                <ProfileImgWrap>
                                    <ProfileImg
                                        $width='200px'
                                        $height='200px'
                                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconI.png'
                                        alt='샘플프아'
                                        $filter
                                    />
                                    <DimmedWrap>
                                        <button onClick={onGo}>
                                            <FaPen size='40px' color='white' />
                                        </button>
                                    </DimmedWrap>
                                </ProfileImgWrap>
                                <P $fontSize='17px' $color='var(--gray-500)'>
                                    닉네임1
                                </P>
                            </Flex>
                            <Flex $gap='20px' $flexDirection='column' $alignItems='center'>
                                <ProfileImgWrap>
                                    <ProfileImg
                                        $width='200px'
                                        $height='200px'
                                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconV.png'
                                        alt='샘플프아'
                                        $filter
                                    />
                                    <DimmedWrap>
                                        <button onClick={onGo}>
                                            <FaPen size='40px' color='white' />
                                        </button>
                                    </DimmedWrap>
                                </ProfileImgWrap>
                                <P $fontSize='17px' $color='var(--gray-500)'>
                                    닉네임2
                                </P>
                            </Flex>
                        </Flex>
                        <ButtonLight
                            onClick={onGoComplete}
                            $padding='1.675rem'
                            $border='1px solid var(--gray-500)'
                            $borderRadius='5px'
                            $color='var(--black)'
                            $width='15.5rem'
                            $backgroundColor='var(--gray-300)'
                        >
                            완료
                        </ButtonLight>
                    </Flex>
                </EditForm>
            </PageWrap>
        </>
    );
};

export default ProfilesForEdit;
