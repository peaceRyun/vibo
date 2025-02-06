import { useState } from 'react';
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

const ProfileForEdit = () => {
    return (
        <>
            <PageWrap>
                <IconList />
                <EditForm>
                    <Flex $flexDirection='column' $alignItems='center' $gap='60px' $padding='90px'>
                        <Flex $flexDirection='column' $alignItems='center' $gap='10px'>
                            <H2>프로필 편집</H2>
                        </Flex>
                        <Flex $gap='40px' $flexDirection='column' $alignItems='center'>
                            <ProfileImgWrap>
                                <ProfileImg
                                    $width='200px'
                                    $height='200px'
                                    src='/contentdetail/sample프아.png'
                                    alt='샘플프아'
                                    $filter
                                />
                                <DimmedWrap>
                                    <button>
                                        <FaPen size='40px' color='white' />
                                    </button>
                                </DimmedWrap>
                            </ProfileImgWrap>
                            <NickNameInput />
                        </Flex>

                        <Flex $gap='15px'>
                            <ButtonLight
                                $padding='1.675rem'
                                $border='1px solid var(--gray-500)'
                                $borderRadius='5px'
                                $color='var(--black)'
                                $width='15.5rem'
                                $backgroundColor='var(--gray-300)'
                            >
                                확인
                            </ButtonLight>
                            <ButtonDark
                                $padding='1.675rem'
                                $border='1px solid var(--gray-500)'
                                $borderRadius='5px'
                                $color='var(--gray-300)'
                                $width='15.5rem'
                            >
                                취소
                            </ButtonDark>
                        </Flex>
                    </Flex>
                </EditForm>
            </PageWrap>
        </>
    );
};

export default ProfileForEdit;
