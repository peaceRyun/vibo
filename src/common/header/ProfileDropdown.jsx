import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import thunkUsers from '../../store/modules/getThunkUser';
import { ProfileDropdownContainer, DropdownItem, BorderLine, LogOut, ProfileLogoContainerB } from './style';
import { AiOutlineEdit } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProfileDropdown = ({ onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(thunkUsers.logout()).then(() => {
            navigate('/');
        });
    };

    return (
        <ProfileDropdownContainer>
            {/* 사용자 목록 */}
            <ul onClick={onClose}>
                <DropdownItem>
                    <ProfileLogoContainerB
                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconV.png'
                        alt='프로필'
                    />
                    사용자1
                </DropdownItem>
                <DropdownItem>
                    <ProfileLogoContainerB
                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconI.png'
                        alt='프로필'
                    />
                    사용자2
                </DropdownItem>
                <DropdownItem>
                    <ProfileLogoContainerB
                        src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/profileIconO.png'
                        alt='프로필'
                    />
                    사용자3
                </DropdownItem>
            </ul>

            {/* 메뉴 항목 */}
            <ul>
                <Link to='/mypage' onClick={onClose}>
                    <DropdownItem>
                        <AiOutlineEdit size={30} />
                        마이페이지
                    </DropdownItem>
                </Link>
                <Link to='/profilesforedit' onClick={onClose}>
                    <DropdownItem>
                        <AiOutlineEdit size={30} />
                        프로필관리
                    </DropdownItem>
                </Link>
                <Link to='/profileinfoedit' onClick={onClose}>
                    <DropdownItem>
                        <AiOutlineEdit size={30} />
                        회원정보수정
                    </DropdownItem>
                </Link>
                <DropdownItem className='noHover'>
                    <BorderLine />
                </DropdownItem>

                {/* 로그아웃 버튼 */}
                <LogOut onClick={handleLogout}>
                    <FiLogOut size={20} />
                    로그아웃
                </LogOut>
            </ul>
        </ProfileDropdownContainer>
    );
};

export default ProfileDropdown;
