import { useEffect, useState } from 'react';
import IconList from './IconList';
import {
    ButtonLight,
    DimmedWrap,
    EditForm,
    Flex,
    H2,
    NickNameInput,
    PageWrap,
    ProfileImg,
    ProfileImgWrap,
    ButtonDark,
} from './style';
import { FaPen } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { profileActions } from '../../../store/modules/profileSlice';

const ProfileForEdit = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { nickname, srcNow } = useSelector((state) => state.profileR);
    const [nick, setNick] = useState(nickname);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleModalOpen = (e) => {
        e.preventDefault();
        setModalOpen(!modalOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nick) return;
        dispatch(profileActions.add(nick));

        const backUrl = localStorage.getItem('profileEditBackUrl');
        if (backUrl === '/profilesforedit') {
            navigate('/profilesforedit');
        } else {
            navigate('/mypage');
        }
        localStorage.removeItem('profileEditBackUrl');
    };

    const changeInput = (e) => {
        setNick(e.target.value);
    };

    const onGo = () => {
        navigate(-1);
    };

    return (
        <>
            <PageWrap>
                {modalOpen && <IconList handleModalOpen={handleModalOpen} />}
                <EditForm onSubmit={handleSubmit}>
                    <Flex $flexDirection='column' $alignItems='center' $gap='60px' $padding='90px'>
                        <Flex $flexDirection='column' $alignItems='center' $gap='10px'>
                            <H2>프로필 편집</H2>
                        </Flex>
                        <Flex $gap='40px' $flexDirection='column' $alignItems='center'>
                            <ProfileImgWrap>
                                <ProfileImg $width='200px' $height='200px' src={srcNow} alt='샘플프아' $filter />
                                <DimmedWrap>
                                    <button onClick={handleModalOpen}>
                                        <FaPen size='40px' color='white' />
                                    </button>
                                </DimmedWrap>
                            </ProfileImgWrap>
                            <NickNameInput
                                type='text'
                                placeholder='본인 닉네임'
                                name='nickname'
                                value={nick}
                                onChange={changeInput}
                            />
                        </Flex>

                        <Flex $gap='15px'>
                            <ButtonDark
                                type='button'
                                onClick={onGo}
                                $padding='1.675rem'
                                $border='1px solid var(--gray-500)'
                                $borderRadius='5px'
                                $color='var(--gray-300)'
                                $width='15.5rem'
                            >
                                취소
                            </ButtonDark>
                            <ButtonLight
                                type='submit'
                                $padding='1.675rem'
                                $border='1px solid var(--gray-500)'
                                $borderRadius='5px'
                                $color='var(--black)'
                                $width='15.5rem'
                                $backgroundColor='var(--gray-300)'
                            >
                                확인
                            </ButtonLight>
                        </Flex>
                    </Flex>
                </EditForm>
            </PageWrap>
        </>
    );
};

export default ProfileForEdit;
