import React from 'react';
import { ProfileLogoContainer } from './style';

const ProfileLogo = ({ onClick }) => {
    return <ProfileLogoContainer src="/common/header/profileLogo.png" alt="프로필 로고" onClick={onClick} />;
};

export default ProfileLogo;
