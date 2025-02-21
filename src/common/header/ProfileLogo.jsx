// HeaderRight 안의 컴포넌트 (두개가 다른 기능을 동작하기 때문에 파일 두개로 나누었습니다.)
import React from 'react';
import { ProfileLogoContainer } from './style';

const ProfileLogo = ({ onClick }) => {
    return (
        <ProfileLogoContainer
            src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/common/header/profileLogo.png'
            alt='프로필'
            onClick={onClick}
        />
    );
};

export default ProfileLogo;
